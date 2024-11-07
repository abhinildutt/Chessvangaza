**CSE 591-3**

1. **Task Objective:**

This assignment's main objective was to investigate the Code Clone Detection task by utilizing CodeBERT embeddings and employing the t-SNE dimensionality reduction technique to visualize their correlations. Our goal was to determine whether code fragments that shared semantic similarities were located near one another in vector space.

2. **Findings:**
1. Spatial Clustering:
   1. Code snippets that shared semantic similarities frequently appeared near one another in the 2D space, suggesting that CodeBERT was capable of capturing semantic similarity. Expectations that similar snippets would produce similar embeddings were supported by this behavior.
1. t-SNE Limitations:
   1. Variability: It's crucial to remember that t-SNE is a stochastic method, which means that every run may yield somewhat different results. The randomization of the process may cause the identical embeddings to appear differently in different runs.
   1. Sensitivity to Parameters: I also noticed that the outcomes were highly susceptible to parameters such as perplexity. More stable clusters are produced by fine-tuning these parameters, particularly when working with a small dataset.
1. General Observations:
- Code snippets that were semantically similar were positioned close to each other in the 2D space, indicating that CodeBERT could effectively capture semantic similarity.
  - Snippets belonging to a pair are supposed to be semantically similar, and in most cases this does appear to be correctly visualized. For example Pair 5 - Snippet 1 and 2 are close, Pair 2 - Snippet 1 and 2 are pretty closed.
  - Some snippets are still far away - for example, Pair 3 - Snippet 1 and 2 are far away. This could be due to various reasons like information loss due to dimensionality reduction, learning parameters were not fine tuned enough, etc.
- Some overlaps occurred, indicating room for improvement in distinguishing between similar functional constructs. For example - Pair 1 Snippet 1 and Pair 4 Snippet 2, Pair 4 Snippet 2 and Pair 1 Snippet 2 overlap. This could happen because of the following reasons:
  - CodeBERT is trained on a wide variety of code snippets and may not always generate embeddings that are distinct enough to differentiate subtle differences in functionality or logic between two code snippets.
  - CodeBERT generates high-dimensional (768-dimensional) embeddings, and reducing these embeddings to just 2 dimensions (as we do with t-SNE) inevitably results in some information loss.

![](Aspose.Words.6eb8d94c-adec-4381-8d14-d862131afd7f.001.jpeg)

// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The top K value for AISearch. The system generates a vector for the input text and retrieves the K text chunks with the most similar vector representations from the knowledge base. Valid values: 0 to 100.
   * The sum of `DenseSimilarityTopK` and `SparseSimilarityTopK` must be less than or equal to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  denseSimilarityTopK?: number;
  /**
   * @remarks
   * The knowledge base description.
   * 
   * @example
   * Enterprise knowledge base
   */
  description?: string;
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  id?: string;
  /**
   * @remarks
   * The knowledge base name.
   * 
   * @example
   * Enterprise help documentation library
   */
  name?: string;
  /**
   * @remarks
   * The number of RCUs for an Ultimate Edition knowledge base. This parameter is required only when pipelineCommercialType is set to enterprise.
   * 
   * Valid values: 1 to 200.
   * 
   * @example
   * 3
   */
  pipelineCommercialCu?: number;
  /**
   * @remarks
   * The specification type of the knowledge base. Valid values:
   * 
   * - standard: Standard Edition.
   * 
   * - enterprise: Ultimate Edition.
   * 
   * @example
   * standard
   */
  pipelineCommercialType?: string;
  /**
   * @remarks
   * The minimum reranking score. Valid values: 0 to 1.
   * 
   * @example
   * 0.01
   */
  rerankMinScore?: string;
  /**
   * @remarks
   * The top K value for keyword retrieval. The system retrieves text chunks in the knowledge base that are an exact match for the keywords of the input text. This helps filter out irrelevant text chunks and provides more accurate results.
   * Valid values: 0 to 100.
   * The sum of `DenseSimilarityTopK` and `SparseSimilarityTopK` must be less than or equal to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  sparseSimilarityTopK?: number;
  static names(): { [key: string]: string } {
    return {
      denseSimilarityTopK: 'DenseSimilarityTopK',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      pipelineCommercialCu: 'PipelineCommercialCu',
      pipelineCommercialType: 'PipelineCommercialType',
      rerankMinScore: 'RerankMinScore',
      sparseSimilarityTopK: 'SparseSimilarityTopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denseSimilarityTopK: 'number',
      description: 'string',
      id: 'string',
      name: 'string',
      pipelineCommercialCu: 'number',
      pipelineCommercialType: 'string',
      rerankMinScore: 'string',
      sparseSimilarityTopK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


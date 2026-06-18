// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The number of most similar text segments to retrieve using vector search. A vector is generated for the input text, and the K most similar text segments are retrieved from the knowledge base. The value of K must be in the range of 0 to 100.
   * The sum of `DenseSimilarityTopK` and `SparseSimilarityTopK` cannot exceed 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  denseSimilarityTopK?: number;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * 企业知识库
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
   * The name of the knowledge base.
   * 
   * @example
   * 企业帮助文档库
   */
  name?: string;
  /**
   * @remarks
   * The number of Retrieval Compute Units (RCUs) for the Ultimate Edition knowledge base. This parameter is required only when PipelineCommercialType is set to enterprise.
   * 
   * The value must be in the range of 1 to 200.
   * 
   * @example
   * 3
   */
  pipelineCommercialCu?: number;
  /**
   * @remarks
   * The edition of the knowledge base. Valid values:
   * 
   * - standard: Standard Edition
   * 
   * - enterprise: Ultimate Edition
   * 
   * @example
   * standard
   */
  pipelineCommercialType?: string;
  /**
   * @remarks
   * The minimum score for sorting. The value must be between 0 and 1.
   * 
   * @example
   * 0.01
   */
  rerankMinScore?: string;
  /**
   * @remarks
   * The number of text segments to retrieve using an exact keyword match. This helps filter out irrelevant text segments and provides more accurate results.
   * The value must be in the range of 0 to 100.
   * The sum of `DenseSimilarityTopK` and `SparseSimilarityTopK` cannot exceed 200.
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


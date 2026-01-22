// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIndexRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  denseSimilarityTopK?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 3
   */
  pipelineCommercialCu?: number;
  /**
   * @example
   * standard
   */
  pipelineCommercialType?: string;
  /**
   * @example
   * 0.01
   */
  rerankMinScore?: string;
  /**
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


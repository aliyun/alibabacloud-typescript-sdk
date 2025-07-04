// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyTableRequestVectorIndexAdvanceParams } from "./ModifyTableRequestVectorIndexAdvanceParams";


export class ModifyTableRequestVectorIndex extends $dara.Model {
  /**
   * @remarks
   * The configurations of the index schema.
   */
  advanceParams?: ModifyTableRequestVectorIndexAdvanceParams;
  /**
   * @remarks
   * The dimension of the vector.
   * 
   * @example
   * 128
   */
  dimension?: string;
  /**
   * @remarks
   * The distance type.
   * 
   * @example
   * SquaredEuclidean
   */
  distanceType?: string;
  /**
   * @remarks
   * The name of the index schema.
   * 
   * @example
   * test_api
   */
  indexName?: string;
  /**
   * @remarks
   * The namespace field.
   * 
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The field that stores the indexes of the elements in sparse vectors.
   * 
   * @example
   * sparse_indices
   */
  sparseIndexField?: string;
  /**
   * @remarks
   * The field that stores the elements in sparse vectors.
   * 
   * @example
   * sparse_values
   */
  sparseValueField?: string;
  /**
   * @remarks
   * The vector field.
   * 
   * @example
   * source_image_vector
   */
  vectorField?: string;
  /**
   * @remarks
   * The vector retrieval algorithm.
   * 
   * @example
   * Qc
   */
  vectorIndexType?: string;
  static names(): { [key: string]: string } {
    return {
      advanceParams: 'advanceParams',
      dimension: 'dimension',
      distanceType: 'distanceType',
      indexName: 'indexName',
      namespace: 'namespace',
      sparseIndexField: 'sparseIndexField',
      sparseValueField: 'sparseValueField',
      vectorField: 'vectorField',
      vectorIndexType: 'vectorIndexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceParams: ModifyTableRequestVectorIndexAdvanceParams,
      dimension: 'string',
      distanceType: 'string',
      indexName: 'string',
      namespace: 'string',
      sparseIndexField: 'string',
      sparseValueField: 'string',
      vectorField: 'string',
      vectorIndexType: 'string',
    };
  }

  validate() {
    if(this.advanceParams && typeof (this.advanceParams as any).validate === 'function') {
      (this.advanceParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


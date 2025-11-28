// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The number of vector dimensions.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * The fields that are used for full-text search. Multiple fields are separated by commas (,).
   * 
   * @example
   * title,content
   */
  fullTextRetrievalFields?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The metadata of vector data, which is a JSON string in the MAP format. The key specifies the field name, and the value specifies the data type.
   * 
   * **
   * 
   * **Warning** Reserved fields such as id, vector, and to_tsvector cannot be used.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The distance metrics.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The analyzer that is used for full-text search.
   * 
   * @example
   * zh_cn
   */
  parser?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The method that is used to create sparse vector indexes.
   * 
   * @example
   * ip
   */
  sparseVectorMetrics?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether sparse vectors are supported.
   * 
   * @example
   * true
   */
  supportSparse?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dimension: 'Dimension',
      fullTextRetrievalFields: 'FullTextRetrievalFields',
      message: 'Message',
      metadata: 'Metadata',
      metrics: 'Metrics',
      namespace: 'Namespace',
      parser: 'Parser',
      regionId: 'RegionId',
      requestId: 'RequestId',
      sparseVectorMetrics: 'SparseVectorMetrics',
      status: 'Status',
      supportSparse: 'SupportSparse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dimension: 'number',
      fullTextRetrievalFields: 'string',
      message: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      metrics: 'string',
      namespace: 'string',
      parser: 'string',
      regionId: 'string',
      requestId: 'string',
      sparseVectorMetrics: 'string',
      status: 'string',
      supportSparse: 'boolean',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


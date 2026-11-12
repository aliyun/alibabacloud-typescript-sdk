// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp152460513z****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The vector dimensions.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * The full-text index fields. Separate multiple fields with commas (,).
   * 
   * @example
   * title,content
   */
  fullTextRetrievalFields?: string;
  /**
   * @remarks
   * The detailed information returned by the API operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The metadata of the vector data, which is a JSON string in MAP format. The key represents the field name, and the value represents the data type.
   * >Warning: The id, vector, and to_tsvector fields are reserved and cannot be used.</warning>
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
   * The namespace.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The tokenizer used for full-text index.
   * 
   * @example
   * zh_cn
   */
  parser?: string;
  /**
   * @remarks
   * The region ID.
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
   * The method used to build indexes for sparse vectors.
   * 
   * @example
   * ip
   */
  sparseVectorMetrics?: string;
  /**
   * @remarks
   * The execution status of the API operation. Valid values:
   * - **success**: The execution is successful.
   * - **fail**: The execution fails.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether sparse vectors are supported.
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


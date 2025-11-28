// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the collection.
   * 
   * @example
   * testcollection
   */
  collection?: string;
  /**
   * @remarks
   * The definition of the index.
   * 
   * @example
   * CREATE INDEX testindex ON mynamespace. testcollection
   */
  indexDef?: string;
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * testindex
   */
  indexName?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
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
   * The unique ID of the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **false**: The operation fails.
   * *   **true**: The operation is successful.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      indexDef: 'IndexDef',
      indexName: 'IndexName',
      message: 'Message',
      namespace: 'Namespace',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      indexDef: 'string',
      indexName: 'string',
      message: 'string',
      namespace: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


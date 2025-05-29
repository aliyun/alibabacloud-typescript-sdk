// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIndexResponseBody extends $dara.Model {
  /**
   * @example
   * testcollection
   */
  collection?: string;
  /**
   * @example
   * CREATE INDEX testindex ON mynamespace. testcollection
   */
  indexDef?: string;
  /**
   * @example
   * testindex
   */
  indexName?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
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


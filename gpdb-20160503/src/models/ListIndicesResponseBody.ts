// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndicesResponseBodyIndicesIndices extends $dara.Model {
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
   * The namespace to which the pod belongs.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      indexDef: 'IndexDef',
      indexName: 'IndexName',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      indexDef: 'string',
      indexName: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponseBodyIndices extends $dara.Model {
  indices?: ListIndicesResponseBodyIndicesIndices[];
  static names(): { [key: string]: string } {
    return {
      indices: 'Indices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: { 'type': 'array', 'itemType': ListIndicesResponseBodyIndicesIndices },
    };
  }

  validate() {
    if(Array.isArray(this.indices)) {
      $dara.Model.validateArray(this.indices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried indexes.
   */
  indices?: ListIndicesResponseBodyIndices;
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
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**.
   * *   **fail**.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      indices: 'Indices',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: ListIndicesResponseBodyIndices,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.indices && typeof (this.indices as any).validate === 'function') {
      (this.indices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectionsResponseBodyCollections extends $dara.Model {
  collection?: string[];
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.collection)) {
      $dara.Model.validateArray(this.collection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried vector collections.
   */
  collections?: ListCollectionsResponseBodyCollections;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  count?: number;
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
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      collections: 'Collections',
      count: 'Count',
      DBInstanceId: 'DBInstanceId',
      message: 'Message',
      namespace: 'Namespace',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collections: ListCollectionsResponseBodyCollections,
      count: 'number',
      DBInstanceId: 'string',
      message: 'string',
      namespace: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.collections && typeof (this.collections as any).validate === 'function') {
      (this.collections as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


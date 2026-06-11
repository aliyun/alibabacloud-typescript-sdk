// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KMSConfig } from "./Kmsconfig";


export class ListSecretsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * Unix timestamp when the secret was created
   * 
   * @example
   * 1725617840096
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Gateway type associated with the secret
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * KMS configuration object
   */
  kmsConfig?: KMSConfig;
  /**
   * @remarks
   * Name of the secret
   * 
   * @example
   * my_secret
   */
  name?: string;
  /**
   * @remarks
   * Number of resources referencing this secret
   * 
   * @example
   * 3
   */
  referenceCount?: number;
  /**
   * @remarks
   * Source of the ID
   * 
   * @example
   * sec-d5e6shmm1hkoxxxxxxxx
   */
  secretId?: string;
  /**
   * @remarks
   * Source of the secret
   * 
   * @example
   * KMS
   */
  secretSource?: string;
  /**
   * @remarks
   * Current status of the secret
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * Unix timestamp when the secret was last updated
   * 
   * @example
   * 1721116090326
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'createTimestamp',
      gatewayType: 'gatewayType',
      kmsConfig: 'kmsConfig',
      name: 'name',
      referenceCount: 'referenceCount',
      secretId: 'secretId',
      secretSource: 'secretSource',
      status: 'status',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      gatewayType: 'string',
      kmsConfig: KMSConfig,
      name: 'string',
      referenceCount: 'number',
      secretId: 'string',
      secretSource: 'string',
      status: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.kmsConfig && typeof (this.kmsConfig as any).validate === 'function') {
      (this.kmsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Array of secret details
   */
  items?: ListSecretsResponseBodyDataItems[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records matching the query
   * 
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListSecretsResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Code of the request
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Data
   */
  data?: ListSecretsResponseBodyData;
  /**
   * @remarks
   * message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3A3D1392-0F71-5A10-9AE8-89C434696966
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSecretsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


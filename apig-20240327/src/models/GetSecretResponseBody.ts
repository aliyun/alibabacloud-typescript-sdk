// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KMSConfig } from "./Kmsconfig";


export class GetSecretResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The gateway type. Valid values:
   * - API: API gateway.
   * - AI: AI gateway.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The KMS configuration information.
   */
  kmsConfig?: KMSConfig;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * mysecret
   */
  name?: string;
  /**
   * @remarks
   * The number of resources that reference the current key.
   * 
   * @example
   * 1
   */
  referenceCount?: number;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * sec-d5e6shmm1hkoxxxxxxxx
   */
  secretId?: string;
  /**
   * @remarks
   * The key source.
   * 
   * @example
   * KMS
   */
  secretSource?: string;
  /**
   * @remarks
   * The key status. Valid values:
   * - ENALBE: Enabled.
   * - DISABLE: Disabled.
   * - DELETED: Deleted.
   * 
   * @example
   * ENALBE
   */
  status?: string;
  /**
   * @remarks
   * The update timestamp.
   * 
   * @example
   * 1725868548440
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

export class GetSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The key information.
   */
  data?: GetSecretResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * CE857A85-251D-5018-8103-A38957D71E20
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
      data: GetSecretResponseBodyData,
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


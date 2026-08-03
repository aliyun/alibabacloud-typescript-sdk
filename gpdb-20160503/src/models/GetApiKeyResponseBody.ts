// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiKeyResponseBodyAuthServices extends $dara.Model {
  /**
   * @remarks
   * The service IDs.
   * 
   * @example
   * agdb-2ze8x9278c9iizl
   */
  serviceId?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - **drama**
   * - **memroy**
   * 
   * @example
   * memory
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the API key.
   * 
   * @example
   * sk-xxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The service IDs.
   */
  authServices?: GetApiKeyResponseBodyAuthServices[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test api key
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API key.
   * 
   * @example
   * api-xxxxxxx
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the API key.
   * 
   * @example
   * test api key
   */
  keyName?: string;
  /**
   * @remarks
   * The prefix of the API key.
   * 
   * @example
   * sk-1235*****
   */
  keyPrefix?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7565770E-7C45-462D-BA4A-8A5396****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      authServices: 'AuthServices',
      createTime: 'CreateTime',
      description: 'Description',
      keyId: 'KeyId',
      keyName: 'KeyName',
      keyPrefix: 'KeyPrefix',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      authServices: { 'type': 'array', 'itemType': GetApiKeyResponseBodyAuthServices },
      createTime: 'string',
      description: 'string',
      keyId: 'string',
      keyName: 'string',
      keyPrefix: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authServices)) {
      $dara.Model.validateArray(this.authServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


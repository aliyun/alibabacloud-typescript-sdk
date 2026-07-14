// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiKeyResponseBodyAuthServices extends $dara.Model {
  /**
   * @example
   * agdb-2ze8x9278c9iizl
   */
  serviceId?: string;
  /**
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
   * @example
   * sk-xxxxxxx
   */
  apiKey?: string;
  authServices?: GetApiKeyResponseBodyAuthServices[];
  /**
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * test api key
   */
  description?: string;
  /**
   * @example
   * api-xxxxxxx
   */
  keyId?: string;
  /**
   * @example
   * test api key
   */
  keyName?: string;
  /**
   * @example
   * sk-1235*****
   */
  keyPrefix?: string;
  /**
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


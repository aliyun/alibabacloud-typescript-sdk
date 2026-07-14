// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysResponseBodyItemsAuthServices extends $dara.Model {
  /**
   * @example
   * agdb-xxxxxx
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

export class ListApiKeysResponseBodyItems extends $dara.Model {
  authServices?: ListApiKeysResponseBodyItemsAuthServices[];
  /**
   * @example
   * 2021-10-09T04:54:08Z
   */
  createTime?: string;
  /**
   * @example
   * my first api key
   */
  description?: string;
  /**
   * @example
   * api-xxxxxxxx
   */
  keyId?: string;
  /**
   * @example
   * my first api key
   */
  keyName?: string;
  /**
   * @example
   * sk-12345****
   */
  keyPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      authServices: 'AuthServices',
      createTime: 'CreateTime',
      description: 'Description',
      keyId: 'KeyId',
      keyName: 'KeyName',
      keyPrefix: 'KeyPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authServices: { 'type': 'array', 'itemType': ListApiKeysResponseBodyItemsAuthServices },
      createTime: 'string',
      description: 'string',
      keyId: 'string',
      keyName: 'string',
      keyPrefix: 'string',
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

export class ListApiKeysResponseBody extends $dara.Model {
  items?: ListApiKeysResponseBodyItems[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListApiKeysResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalRecordCount: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppResponseBodyResultNetworkWhiteIpGroup extends $dara.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResultNetwork extends $dara.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  type?: string;
  whiteIpGroup?: GetAppResponseBodyResultNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      type: 'type',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      type: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': GetAppResponseBodyResultNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResultPrivateNetworkWhiteIpGroup extends $dara.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResultPrivateNetwork extends $dara.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: GetAppResponseBodyResultPrivateNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      pvlEndpointId: 'pvlEndpointId',
      type: 'type',
      vpcId: 'vpcId',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': GetAppResponseBodyResultPrivateNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResultTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResult extends $dara.Model {
  /**
   * @example
   * test-app-abc
   */
  appId?: string;
  /**
   * @example
   * es-severless-test-app
   */
  appName?: string;
  appType?: string;
  chargeType?: string;
  /**
   * @example
   * 2022-08-15T11:20:52.370Z
   */
  createTime?: string;
  description?: string;
  instanceId?: string;
  /**
   * @example
   * 2022-08-15T11:21:50.000Z
   */
  modifiedTime?: string;
  network?: GetAppResponseBodyResultNetwork[];
  /**
   * @example
   * *******7595
   */
  ownerId?: string;
  privateNetwork?: GetAppResponseBodyResultPrivateNetwork[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  scenario?: string;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  tags?: GetAppResponseBodyResultTags[];
  /**
   * @example
   * 7.10
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appName: 'appName',
      appType: 'appType',
      chargeType: 'chargeType',
      createTime: 'createTime',
      description: 'description',
      instanceId: 'instanceId',
      modifiedTime: 'modifiedTime',
      network: 'network',
      ownerId: 'ownerId',
      privateNetwork: 'privateNetwork',
      regionId: 'regionId',
      scenario: 'scenario',
      status: 'status',
      tags: 'tags',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      modifiedTime: 'string',
      network: { 'type': 'array', 'itemType': GetAppResponseBodyResultNetwork },
      ownerId: 'string',
      privateNetwork: { 'type': 'array', 'itemType': GetAppResponseBodyResultPrivateNetwork },
      regionId: 'string',
      scenario: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetAppResponseBodyResultTags },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    if(Array.isArray(this.privateNetwork)) {
      $dara.Model.validateArray(this.privateNetwork);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $dara.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: GetAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAppResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


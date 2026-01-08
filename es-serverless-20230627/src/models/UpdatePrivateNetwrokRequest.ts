// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateNetwrokRequestBodyWhiteIpGroup extends $dara.Model {
  /**
   * @example
   * default
   */
  groupName?: string;
  ips?: string[];
  /**
   * @example
   * Cover
   */
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
      modifyMode: 'modifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      modifyMode: 'string',
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

export class UpdatePrivateNetwrokRequestBody extends $dara.Model {
  /**
   * @example
   * autotest-8k8a8.serverless.cn-hangzhou.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 9200
   */
  port?: number;
  /**
   * @example
   * ep-bp1id6dc2568****
   */
  pvlEndpointId?: string;
  /**
   * @example
   * PRIVATE_ES
   */
  type?: string;
  /**
   * @example
   * vpc-uf664nyle5khp5***
   */
  vpcId?: string;
  whiteIpGroup?: UpdatePrivateNetwrokRequestBodyWhiteIpGroup[];
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
      whiteIpGroup: { 'type': 'array', 'itemType': UpdatePrivateNetwrokRequestBodyWhiteIpGroup },
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

export class UpdatePrivateNetwrokRequest extends $dara.Model {
  body?: UpdatePrivateNetwrokRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdatePrivateNetwrokRequestBody },
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkRequestBodyWhiteIpGroup extends $dara.Model {
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

export class UpdateNetworkRequestBody extends $dara.Model {
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
   * PUBLIC_ES
   */
  type?: string;
  whiteIpGroup?: UpdateNetworkRequestBodyWhiteIpGroup[];
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
      whiteIpGroup: { 'type': 'array', 'itemType': UpdateNetworkRequestBodyWhiteIpGroup },
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

export class UpdateNetworkRequest extends $dara.Model {
  body?: UpdateNetworkRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateNetworkRequestBody },
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


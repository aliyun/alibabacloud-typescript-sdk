// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateNetwrokResponseBodyResultWhiteIpGroup extends $dara.Model {
  /**
   * @example
   * default
   */
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

export class UpdatePrivateNetwrokResponseBodyResult extends $dara.Model {
  /**
   * @example
   * test-**.private.cn-hangzhou.es-serverless.aliyuncs.com
   */
  domain?: string;
  /**
   * @example
   * true
   */
  enabled?: string;
  /**
   * @example
   * 9200
   */
  port?: string;
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
   * vpc-uf6gykvwcirp886ef****
   */
  vpcId?: string;
  whiteIpGroup?: UpdatePrivateNetwrokResponseBodyResultWhiteIpGroup[];
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
      enabled: 'string',
      port: 'string',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': UpdatePrivateNetwrokResponseBodyResultWhiteIpGroup },
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

export class UpdatePrivateNetwrokResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: UpdatePrivateNetwrokResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdatePrivateNetwrokResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


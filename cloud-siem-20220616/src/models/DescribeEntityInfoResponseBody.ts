// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEntityInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The logical ID of the entity.
   * 
   * @example
   * 12345
   */
  entityId?: number;
  /**
   * @remarks
   * The information about the entity.
   * 
   * @example
   * { location: "xian", net_connect_dir: "in", malware_type: "${aliyun.siem.sas.alert_tag.login_unusual_account}" }
   */
  entityInfo?: { [key: string]: any };
  /**
   * @remarks
   * The type of the entity. Valid values:
   * 
   * - ip: IP address
   * 
   * - domain: domain name
   * 
   * - url: URL
   * 
   * - process: process
   * 
   * - file: file
   * 
   * - host: host
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The threat intelligence information.
   * 
   * @example
   * {
   *       "Ip": {
   *             "queryHot": "0",
   *             "country": "China",
   *             "province": "shanxi",
   *             "ip": "221.11.XX.XXX",
   *             "asn": "4837",
   *             "asn_label": "CHINAXXX-Backbone - CHINA UNICOM ChinaXXX Backbone, CN"
   *       }
   * }
   */
  tipInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityInfo: 'EntityInfo',
      entityType: 'EntityType',
      tipInfo: 'TipInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      entityInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      entityType: 'string',
      tipInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.entityInfo) {
      $dara.Model.validateMap(this.entityInfo);
    }
    if(this.tipInfo) {
      $dara.Model.validateMap(this.tipInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEntityInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeEntityInfoResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeEntityInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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


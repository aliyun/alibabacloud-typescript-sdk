// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransportLayerApplicationRequestRules extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clientIPPassThroughMode?: string;
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  edgePort?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourcePort?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientIPPassThroughMode: 'ClientIPPassThroughMode',
      comment: 'Comment',
      edgePort: 'EdgePort',
      protocol: 'Protocol',
      source: 'Source',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIPPassThroughMode: 'string',
      comment: 'string',
      edgePort: 'string',
      protocol: 'string',
      source: 'string',
      sourcePort: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransportLayerApplicationRequest extends $dara.Model {
  crossBorderOptimization?: string;
  ipAccessRule?: string;
  ipv6?: string;
  keepAliveProtection?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rules?: CreateTransportLayerApplicationRequestRules[];
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  staticIp?: string;
  static names(): { [key: string]: string } {
    return {
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      keepAliveProtection: 'KeepAliveProtection',
      recordName: 'RecordName',
      rules: 'Rules',
      siteId: 'SiteId',
      staticIp: 'StaticIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      keepAliveProtection: 'string',
      recordName: 'string',
      rules: { 'type': 'array', 'itemType': CreateTransportLayerApplicationRequestRules },
      siteId: 'number',
      staticIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


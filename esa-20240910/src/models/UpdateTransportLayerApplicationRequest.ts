// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationRequestRules extends $dara.Model {
  clientIPPassThroughMode?: string;
  comment?: string;
  edgePort?: string;
  protocol?: string;
  source?: string;
  sourcePort?: string;
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

export class UpdateTransportLayerApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationId?: number;
  crossBorderOptimization?: string;
  ipAccessRule?: string;
  ipv6?: string;
  keepAliveProtection?: string;
  rules?: UpdateTransportLayerApplicationRequestRules[];
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  staticIp?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      keepAliveProtection: 'KeepAliveProtection',
      rules: 'Rules',
      siteId: 'SiteId',
      staticIp: 'StaticIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      keepAliveProtection: 'string',
      rules: { 'type': 'array', 'itemType': UpdateTransportLayerApplicationRequestRules },
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


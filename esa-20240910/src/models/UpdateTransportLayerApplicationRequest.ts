// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationRequestRules extends $dara.Model {
  /**
   * @example
   * TOA
   */
  clientIPPassThroughMode?: string;
  /**
   * @example
   * 123
   */
  comment?: string;
  /**
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @example
   * ip
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

export class UpdateTransportLayerApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 165503967****
   */
  applicationId?: number;
  crossBorderOptimization?: string;
  ipAccessRule?: string;
  ipv6?: string;
  rules?: UpdateTransportLayerApplicationRequestRules[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      rules: 'Rules',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      rules: { 'type': 'array', 'itemType': UpdateTransportLayerApplicationRequestRules },
      siteId: 'number',
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


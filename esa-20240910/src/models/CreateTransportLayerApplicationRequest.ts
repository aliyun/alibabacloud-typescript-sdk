// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransportLayerApplicationRequestRules extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TOA
   */
  clientIPPassThroughMode?: string;
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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

export class CreateTransportLayerApplicationRequest extends $dara.Model {
  crossBorderOptimization?: string;
  ipAccessRule?: string;
  ipv6?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aaa.example.com
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
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      recordName: 'RecordName',
      rules: 'Rules',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      recordName: 'string',
      rules: { 'type': 'array', 'itemType': CreateTransportLayerApplicationRequestRules },
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


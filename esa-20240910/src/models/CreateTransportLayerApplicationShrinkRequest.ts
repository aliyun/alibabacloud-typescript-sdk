// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransportLayerApplicationShrinkRequest extends $dara.Model {
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
  rulesShrink?: string;
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
      rulesShrink: 'Rules',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      recordName: 'string',
      rulesShrink: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


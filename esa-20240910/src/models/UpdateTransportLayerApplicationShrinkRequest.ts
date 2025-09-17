// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationShrinkRequest extends $dara.Model {
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
      applicationId: 'ApplicationId',
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      rulesShrink: 'Rules',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
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


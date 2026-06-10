// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phones to include in this rule.
   */
  authAndroidId?: string[];
  authDesktopGroupId?: string[];
  /**
   * @remarks
   * The IDs of the cloud desktops to include in this rule.
   */
  authDesktopId?: string[];
  /**
   * @remarks
   * The maximum downstream bandwidth. Unit: Mbps.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  download?: number;
  /**
   * @remarks
   * The ID of the premium bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * np-cfedn7r2pe48g****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The name of the QoS rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  qosRuleName?: string;
  /**
   * @remarks
   * The maximum upstream bandwidth. Unit: Mbps.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  upload?: number;
  static names(): { [key: string]: string } {
    return {
      authAndroidId: 'AuthAndroidId',
      authDesktopGroupId: 'AuthDesktopGroupId',
      authDesktopId: 'AuthDesktopId',
      download: 'Download',
      networkPackageId: 'NetworkPackageId',
      qosRuleName: 'QosRuleName',
      upload: 'Upload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAndroidId: { 'type': 'array', 'itemType': 'string' },
      authDesktopGroupId: { 'type': 'array', 'itemType': 'string' },
      authDesktopId: { 'type': 'array', 'itemType': 'string' },
      download: 'number',
      networkPackageId: 'string',
      qosRuleName: 'string',
      upload: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authAndroidId)) {
      $dara.Model.validateArray(this.authAndroidId);
    }
    if(Array.isArray(this.authDesktopGroupId)) {
      $dara.Model.validateArray(this.authDesktopGroupId);
    }
    if(Array.isArray(this.authDesktopId)) {
      $dara.Model.validateArray(this.authDesktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud phones to associate.
   */
  authAndroidId?: string[];
  /**
   * @remarks
   * The ID of the cloud computer pool for which the authorization takes effect.
   */
  authDesktopGroupId?: string[];
  /**
   * @remarks
   * The list of cloud computer IDs to associate.
   */
  authDesktopId?: string[];
  /**
   * @remarks
   * The peak downstream bandwidth. Unit: Mbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  download?: number;
  /**
   * @remarks
   * The premium bandwidth ID.
   * 
   * This parameter is required.
   * 
   * @example
   * np-cfedn7r2pe48g****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The name of the rate limiting rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Office network rate limiting rule
   */
  qosRuleName?: string;
  /**
   * @remarks
   * The peak upstream bandwidth. Unit: Mbit/s.
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


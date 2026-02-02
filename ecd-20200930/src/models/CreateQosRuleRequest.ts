// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosRuleRequest extends $dara.Model {
  authAndroidId?: string[];
  authDesktopId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  download?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * np-cfedn7r2pe48g****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  qosRuleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  upload?: number;
  static names(): { [key: string]: string } {
    return {
      authAndroidId: 'AuthAndroidId',
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
    if(Array.isArray(this.authDesktopId)) {
      $dara.Model.validateArray(this.authDesktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


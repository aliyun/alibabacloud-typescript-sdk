// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQosEntriesRequest extends $dara.Model {
  authAndroidId?: string[];
  authDesktopId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qos-5605u0gelk200****
   */
  qosRuleId?: string;
  revokeAndroidId?: string[];
  revokeDesktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      authAndroidId: 'AuthAndroidId',
      authDesktopId: 'AuthDesktopId',
      qosRuleId: 'QosRuleId',
      revokeAndroidId: 'RevokeAndroidId',
      revokeDesktopId: 'RevokeDesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAndroidId: { 'type': 'array', 'itemType': 'string' },
      authDesktopId: { 'type': 'array', 'itemType': 'string' },
      qosRuleId: 'string',
      revokeAndroidId: { 'type': 'array', 'itemType': 'string' },
      revokeDesktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.authAndroidId)) {
      $dara.Model.validateArray(this.authAndroidId);
    }
    if(Array.isArray(this.authDesktopId)) {
      $dara.Model.validateArray(this.authDesktopId);
    }
    if(Array.isArray(this.revokeAndroidId)) {
      $dara.Model.validateArray(this.revokeAndroidId);
    }
    if(Array.isArray(this.revokeDesktopId)) {
      $dara.Model.validateArray(this.revokeDesktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


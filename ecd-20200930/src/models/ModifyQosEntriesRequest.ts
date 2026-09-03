// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQosEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud phone IDs to associate.
   */
  authAndroidId?: string[];
  /**
   * @remarks
   * The ID of the cloud desktop pool to authorize.
   */
  authDesktopGroupId?: string[];
  /**
   * @remarks
   * The list of cloud desktop IDs to associate.
   */
  authDesktopId?: string[];
  /**
   * @remarks
   * The ID of the public network rate limiting rule.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-5605u0gelk200****
   */
  qosRuleId?: string;
  /**
   * @remarks
   * The list of cloud phone IDs to disassociate.
   */
  revokeAndroidId?: string[];
  /**
   * @remarks
   * The ID of the cloud desktop pool to revoke authorization from.
   */
  revokeDesktopGroupId?: string[];
  /**
   * @remarks
   * The list of cloud desktop IDs to disassociate.
   */
  revokeDesktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      authAndroidId: 'AuthAndroidId',
      authDesktopGroupId: 'AuthDesktopGroupId',
      authDesktopId: 'AuthDesktopId',
      qosRuleId: 'QosRuleId',
      revokeAndroidId: 'RevokeAndroidId',
      revokeDesktopGroupId: 'RevokeDesktopGroupId',
      revokeDesktopId: 'RevokeDesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAndroidId: { 'type': 'array', 'itemType': 'string' },
      authDesktopGroupId: { 'type': 'array', 'itemType': 'string' },
      authDesktopId: { 'type': 'array', 'itemType': 'string' },
      qosRuleId: 'string',
      revokeAndroidId: { 'type': 'array', 'itemType': 'string' },
      revokeDesktopGroupId: { 'type': 'array', 'itemType': 'string' },
      revokeDesktopId: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.revokeAndroidId)) {
      $dara.Model.validateArray(this.revokeAndroidId);
    }
    if(Array.isArray(this.revokeDesktopGroupId)) {
      $dara.Model.validateArray(this.revokeDesktopGroupId);
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


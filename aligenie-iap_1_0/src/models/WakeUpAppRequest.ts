// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WakeUpAppRequestTargetInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.  
   * - When the encoding type is SKILLID, the value is the skill ID obtained from the webhook service.  
   * - When the encoding type is PACKAGENAME, the value is the packageName of the corresponding client application.
   * 
   * This parameter is required.
   * 
   * @example
   * apk包名
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the MeowGenie device ID, and each method corresponds to a different encoding type:  
   * - PACKAGE_NAME: APK package name  
   * - SKILL_ID: Skill ID
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Organization ID. This is required only when the push type is `XX_UNION_XX`. If you have multiple methods to obtain MeowGenie device IDs and need interoperability among them, you must request an organization from the platform. After approval, the platform will assign an organization ID.
   * 
   * @example
   * 11
   */
  organizationId?: string;
  /**
   * @remarks
   * The identity value corresponding to the Push Target Type.
   * 
   * This parameter is required.
   * 
   * @example
   * 2VpiDQ6aMjxz******Eo7r6e08oIVZ3fKrm5TyEfY=
   */
  targetIdentity?: string;
  /**
   * @remarks
   * Push Target Type, which indicates the type of the obtained device identity:  
   * - `DEVICE_UNION_ID`: Device unionId  
   * - `DEVICE_OPEN_ID`: Device openId
   * 
   * This parameter is required.
   * 
   * @example
   * DEVICE_OPEN_ID
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      organizationId: 'OrganizationId',
      targetIdentity: 'TargetIdentity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      organizationId: 'string',
      targetIdentity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WakeUpAppRequest extends $dara.Model {
  /**
   * @remarks
   * The debug identity. When the skill application is in the debugging phase, this setting determines whether the retrieved skill application information is from the editing state or the online state.
   * 
   * @example
   * true
   */
  isDebug?: boolean;
  /**
   * @remarks
   * The path to launch the application, similar to the Link you enter in the skill application console.
   * 
   * This parameter is required.
   * 
   * @example
   * 应用拉起路径
   */
  path?: string;
  /**
   * @remarks
   * Device Information of the target to be launched.
   * 
   * This parameter is required.
   */
  targetInfo?: WakeUpAppRequestTargetInfo;
  static names(): { [key: string]: string } {
    return {
      isDebug: 'IsDebug',
      path: 'Path',
      targetInfo: 'TargetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDebug: 'boolean',
      path: 'string',
      targetInfo: WakeUpAppRequestTargetInfo,
    };
  }

  validate() {
    if(this.targetInfo && typeof (this.targetInfo as any).validate === 'function') {
      (this.targetInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WakeUpAppRequestTargetInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * apk包名
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @example
   * 11
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2VpiDQ6aMjxz******Eo7r6e08oIVZ3fKrm5TyEfY=
   */
  targetIdentity?: string;
  /**
   * @remarks
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
   * @example
   * true
   */
  isDebug?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 应用拉起路径
   */
  path?: string;
  /**
   * @remarks
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


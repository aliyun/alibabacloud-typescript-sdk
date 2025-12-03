// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectMemberResponseBodyMember extends $dara.Model {
  /**
   * @example
   * 1623916393000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1623916393000
   */
  gmtModified?: number;
  /**
   * @example
   * 1124382
   */
  id?: string;
  /**
   * @example
   * project.admin
   */
  roleIdentifier?: string;
  /**
   * @example
   * 5e70xxxxxxcd000xxxxe96
   */
  targetIdentifier?: string;
  /**
   * @example
   * Space
   */
  targetType?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  userIdentifier?: string;
  /**
   * @example
   * user
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      roleIdentifier: 'roleIdentifier',
      targetIdentifier: 'targetIdentifier',
      targetType: 'targetType',
      userIdentifier: 'userIdentifier',
      userType: 'userType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      roleIdentifier: 'string',
      targetIdentifier: 'string',
      targetType: 'string',
      userIdentifier: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectMemberResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  member?: UpdateProjectMemberResponseBodyMember;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      member: 'member',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      member: UpdateProjectMemberResponseBodyMember,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.member && typeof (this.member as any).validate === 'function') {
      (this.member as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


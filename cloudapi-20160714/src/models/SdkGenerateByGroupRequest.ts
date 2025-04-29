// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdkGenerateByGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1a991a450b9548a1a3df38fd3af117c2
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * java
   */
  language?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      language: 'Language',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      language: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


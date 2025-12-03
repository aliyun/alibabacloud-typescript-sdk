// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGroupMemberRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  accessLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18745637472884
   */
  aliyunPks?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      accessLevel: 'accessLevel',
      aliyunPks: 'aliyunPks',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessLevel: 'number',
      aliyunPks: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


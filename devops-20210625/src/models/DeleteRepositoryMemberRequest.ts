// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRepositoryMemberRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * USERS
   */
  memberType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 632bbfdf419338aaa2b1360a
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      memberType: 'memberType',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      memberType: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBranchInfoRequest extends $dara.Model {
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
   * master
   */
  branchName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fbe3118672533690be72b12
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      branchName: 'branchName',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      branchName: 'string',
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


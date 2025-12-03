// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBranchRequest extends $dara.Model {
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
   * deleteBranch
   */
  branchName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 619b80042f595dbd1b9b0de2
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


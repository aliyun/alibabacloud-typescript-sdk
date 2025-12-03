// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBranchRequest extends $dara.Model {
  /**
   * @example
   * 0cf2c8458ac44d9481aab2dd6ec10596v3
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * createBranch
   */
  branchName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * master
   */
  ref?: string;
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
      branchName: 'branchName',
      ref: 'ref',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      branchName: 'string',
      ref: 'string',
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


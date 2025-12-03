// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileRequest extends $dara.Model {
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
   * master
   */
  branchName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commitMessage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * text
   */
  encoding?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * src/main/update.txt
   */
  newPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * src/main/update.txt
   */
  oldPath?: string;
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
      commitMessage: 'commitMessage',
      content: 'content',
      encoding: 'encoding',
      newPath: 'newPath',
      oldPath: 'oldPath',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      branchName: 'string',
      commitMessage: 'string',
      content: 'string',
      encoding: 'string',
      newPath: 'string',
      oldPath: 'string',
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


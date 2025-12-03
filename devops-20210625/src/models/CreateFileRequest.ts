// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileRequest extends $dara.Model {
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
   * /src/main/test.java
   */
  filePath?: string;
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
      filePath: 'filePath',
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
      filePath: 'string',
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


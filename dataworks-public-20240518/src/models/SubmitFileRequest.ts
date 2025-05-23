// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFileRequest extends $dara.Model {
  /**
   * @example
   * Submit a task for the first time
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000000
   */
  fileId?: number;
  /**
   * @example
   * 100001
   */
  projectId?: number;
  /**
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @example
   * false
   */
  skipAllDeployFileExtensions?: boolean;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      skipAllDeployFileExtensions: 'SkipAllDeployFileExtensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fileId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
      skipAllDeployFileExtensions: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


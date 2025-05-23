// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000201
   */
  fileId?: number;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  fileVersion?: number;
  /**
   * @example
   * 1000011
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
      fileVersion: 'FileVersion',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      fileVersion: 'number',
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


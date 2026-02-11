// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * File ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  fileId?: number;
  /**
   * @remarks
   * Project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


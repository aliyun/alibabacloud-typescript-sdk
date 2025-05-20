// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveFaceGroupFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Cluster-abc
   */
  faceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abcd
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      faceGroupId: 'face_group_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      faceGroupId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvestigateFileRequestDriveFileIds extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
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

export class InvestigateFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  driveFileIds?: InvestigateFileRequestDriveFileIds[];
  static names(): { [key: string]: string } {
    return {
      driveFileIds: 'drive_file_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveFileIds: { 'type': 'array', 'itemType': InvestigateFileRequestDriveFileIds },
    };
  }

  validate() {
    if(Array.isArray(this.driveFileIds)) {
      $dara.Model.validateArray(this.driveFileIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvestigateFileRequestDriveFileIds } from "./InvestigateFileRequestDriveFileIds";


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


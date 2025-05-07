// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserBackupFilesResponseBodyRecords } from "./ListUserBackupFilesResponseBodyRecords";


export class ListUserBackupFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the full backup files.
   */
  records?: ListUserBackupFilesResponseBodyRecords[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD67C22F-64F3-4448-A9A8-D1606D242879
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListUserBackupFilesResponseBodyRecords },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


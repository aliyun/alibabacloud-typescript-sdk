// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportUserBackupFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the full backup file.
   * 
   * @example
   * b-n8tpg24c6i0v********
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A140DD14-DCC9-4548-9C72-52A49A58A310
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the full backup file is successfully imported into the instance. If the full backup file is successfully imported, **true** is returned. Otherwise, an error message is returned.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


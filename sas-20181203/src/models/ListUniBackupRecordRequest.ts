// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUniBackupRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The region where the anti-ransomware backup service is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  backupRegionId?: string;
  /**
   * @remarks
   * When performing a paginated query, set the page number for the current page. The default value is **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The identification information of the server protected by the anti-ransomware policy. You can enter the IP address or instance ID of the server.
   * 
   * @example
   * 1.1.XX.XX
   */
  machineRemark?: string;
  /**
   * @remarks
   * The maximum number of data entries to display per page in a paginated query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Backup status. Values:
   * - **completed**: Success
   * - **error**: Failure
   * - **canceled**: Closed
   * 
   * @example
   * completed
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      backupRegionId: 'BackupRegionId',
      currentPage: 'CurrentPage',
      machineRemark: 'MachineRemark',
      pageSize: 'PageSize',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRegionId: 'string',
      currentPage: 'number',
      machineRemark: 'string',
      pageSize: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


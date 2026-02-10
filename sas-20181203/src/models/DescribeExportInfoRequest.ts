// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * 
   * > You can call the [ExportRecord](~~ExportRecord~~) operation to query the IDs of export tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 111
   */
  exportId?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 16670360956*****
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      exportId: 'ExportId',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportId: 'number',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


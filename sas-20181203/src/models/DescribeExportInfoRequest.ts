// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * > You can obtain this parameter by calling the [ExportRecord](~~ExportRecord~~) operation to initiate an export.
   * 
   * This parameter is required.
   * 
   * @example
   * 111
   */
  exportId?: number;
  /**
   * @remarks
   * The ID of the member account in the resource directory.
   * > You can obtain this parameter by invoking the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation.
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


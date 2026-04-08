// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulExportInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 14356
   */
  exportId?: number;
  /**
   * @example
   * 1
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHcExportInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task. Call the [ExportWarning](https://help.aliyun.com/document_detail/425092.html) operation to obtain the task ID (**Id**).
   * 
   * @example
   * 443285
   */
  exportId?: number;
  static names(): { [key: string]: string } {
    return {
      exportId: 'ExportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


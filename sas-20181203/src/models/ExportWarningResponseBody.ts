// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportWarningResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the file that contains exported baseline check results.
   * 
   * @example
   * health_check_export_20220407
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the task to export baseline check results.
   * 
   * > You can call use the value of this parameter to call the [DescribeHcExportInfo](~~DescribeHcExportInfo~~) operation to query the export progress.
   * 
   * @example
   * 439316
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A7FC828B-C242-1005-9736-C7CC5DC09FF0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      id: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


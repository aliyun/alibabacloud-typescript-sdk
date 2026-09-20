// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportMigrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 1234
   */
  data?: number;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 34267E2E-0335-1A60-A1F0-ADA530890CBA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed. You can locate the issue based on the request ID.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


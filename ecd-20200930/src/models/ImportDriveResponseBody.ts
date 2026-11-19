// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportDriveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The modification result. A value of `success` indicates success. Otherwise, an error message is returned.
   * 
   * @example
   * Response code. 200 indicates success
   */
  code?: string;
  /**
   * @remarks
   * The newly created or reused target drive ID. A success response only indicates that the import task has been accepted.
   * 
   * @example
   * dri-aaaa****
   */
  driveId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Response message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A87DBB05-653A-5E4B-B72B-5F4A1E07****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      driveId: 'DriveId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      driveId: 'string',
      message: 'string',
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


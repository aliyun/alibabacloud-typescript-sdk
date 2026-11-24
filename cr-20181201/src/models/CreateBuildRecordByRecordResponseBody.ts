// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBuildRecordByRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The build record ID.
   * 
   * @example
   * crbr-ly77w5i3t31f****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The return code of the API operation. A value of 200 indicates success. Other values indicate error codes.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - `true`: The call was successful.
   * 
   * - `false`: The call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      code: 'string',
      isSuccess: 'boolean',
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


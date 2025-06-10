// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBuildRecordByRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * @example
   * crbr-ly77w5i3t31f****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.\\
   * Other status codes indicate that the request failed.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
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


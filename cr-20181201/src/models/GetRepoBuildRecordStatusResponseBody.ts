// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoBuildRecordStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the image building.
   * 
   * @example
   * success
   */
  buildStatus?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79174CBA-8556-443A-8976-22C922D7BE37
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildStatus: 'BuildStatus',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildStatus: 'string',
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


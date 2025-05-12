// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBuildRecordByRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * @example
   * 0A311FC5-B8C6-4332-80E4-539EB73****
   */
  buildRecordId?: string;
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
   * The request ID.
   * 
   * @example
   * B01B8857-A16E-40E9-A37E-764F15776FAA
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


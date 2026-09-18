// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSkillAuditRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data body returned by the operation. For information about the fields, see the child parameters.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message code.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 016D6CE5-51C6-5767-A8F9-D2818FC56509
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values: true and false. If false is returned, check errCode and errMessage for troubleshooting.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed. This parameter is not returned if the job is successful.
   * 
   * @example
   * InvalidParameter.JsonObjectFormatInvalid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the job failed. This parameter is not returned if the job is successful.
   * 
   * @example
   * The parameter \\"Input\\" does not conform to the JSON Object specification
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the message returned if the job was successful. This parameter is not returned if the job fails.
   * 
   * @example
   * 123
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


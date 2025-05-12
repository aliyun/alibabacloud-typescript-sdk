// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaInfoJobResponseBodyMediaInfoJobMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The parameter \\"Input\\" does not conform to the JSON Object specification
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * InvalidParameter.JsonObjectFormatInvalid
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the message that is returned if the job is successful. This parameter is not returned if the job fails.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
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


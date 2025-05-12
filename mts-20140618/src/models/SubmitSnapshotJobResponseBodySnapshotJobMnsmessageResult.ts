// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobResponseBodySnapshotJobMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the message. This parameter is not returned if the job fails.
   * 
   * @example
   * 799454621135656C7F815F198A76****
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


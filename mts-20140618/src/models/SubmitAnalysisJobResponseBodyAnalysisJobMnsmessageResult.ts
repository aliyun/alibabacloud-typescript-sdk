// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAnalysisJobResponseBodyAnalysisJobMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed. This parameter is not returned if the job was successful.
   * 
   * @example
   * InvalidParameter.ResourceNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the job failed. This parameter is not returned if the job was successful.
   * 
   * @example
   * The resource operated \\"PipelineId\\" cannot be found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the message returned if the job was successful. This parameter is not returned if the job failed.
   * 
   * @example
   * 3ca84a39a9024f19853b21be9cf9****
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


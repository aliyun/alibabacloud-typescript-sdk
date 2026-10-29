// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerKnowledgeFileParseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the file submitted for reparsing, which is a decimal string. This parameter is returned only when the request is successful.
   * 
   * @example
   * 123
   */
  fileId?: string;
  /**
   * @remarks
   * The description of the operation result. If the operation fails, this parameter indicates the cause or the security error code.
   * 
   * @example
   * Reparse task submitted
   */
  message?: string;
  /**
   * @remarks
   * The status before submission. Valid values: PENDING, COMPLETED, FAILED, SKIPPED, and DUPLICATED. This parameter is returned only when the request is successful.
   * 
   * @example
   * COMPLETED
   */
  previousStatus?: string;
  /**
   * @remarks
   * The status after submission. The value is fixed to PENDING. This parameter is returned only when the request is successful.
   * 
   * @example
   * PENDING
   */
  processStatus?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. If the operation fails, the Data parameter contains only the Success and Message parameters.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      message: 'Message',
      previousStatus: 'PreviousStatus',
      processStatus: 'ProcessStatus',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      message: 'string',
      previousStatus: 'string',
      processStatus: 'string',
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

export class TriggerKnowledgeFileParseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: TriggerKnowledgeFileParseResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TriggerKnowledgeFileParseResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


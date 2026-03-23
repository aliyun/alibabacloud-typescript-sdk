// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidateFileStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of email addresses with the validation result \\`CatchAll\\`.
   * 
   * @example
   * 2
   */
  catchAllNum?: string;
  /**
   * @remarks
   * The time when the task was completed.
   * 
   * @example
   * 2000-01-01T00:00:00Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The number of email addresses with the validation result \\`DoNotMail\\`.
   * 
   * @example
   * 1
   */
  doNotMailNum?: string;
  fileId?: string;
  /**
   * @remarks
   * The name of the file that was uploaded when the task was submitted.
   * 
   * @example
   * file.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The number of email addresses with the validation result \\`Invalid\\`.
   * 
   * @example
   * 2
   */
  invalidNum?: string;
  /**
   * @remarks
   * The progress of the task execution.
   * 
   * @example
   * 100%
   */
  percentage?: string;
  /**
   * @remarks
   * The number of email addresses that have been validated.
   * 
   * @example
   * 10
   */
  processedNum?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * yyyy-yyyy-yyyy-yyyy
   */
  requestId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The total number of email addresses to validate.
   * 
   * @example
   * 10
   */
  totalNum?: string;
  /**
   * @remarks
   * The number of email addresses with the validation result \\`Unknown\\`.
   * 
   * @example
   * 1
   */
  unknownNum?: string;
  /**
   * @remarks
   * The time when the file was submitted.
   * 
   * @example
   * 2000-01-01T00:00:00Z
   */
  uploadTime?: string;
  /**
   * @remarks
   * The number of email addresses with the validation result \\`Valid\\`.
   * 
   * @example
   * 4
   */
  validNum?: string;
  static names(): { [key: string]: string } {
    return {
      catchAllNum: 'CatchAllNum',
      completeTime: 'CompleteTime',
      doNotMailNum: 'DoNotMailNum',
      fileId: 'FileId',
      fileName: 'FileName',
      invalidNum: 'InvalidNum',
      percentage: 'Percentage',
      processedNum: 'ProcessedNum',
      requestId: 'RequestId',
      status: 'Status',
      totalNum: 'TotalNum',
      unknownNum: 'UnknownNum',
      uploadTime: 'UploadTime',
      validNum: 'ValidNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catchAllNum: 'string',
      completeTime: 'string',
      doNotMailNum: 'string',
      fileId: 'string',
      fileName: 'string',
      invalidNum: 'string',
      percentage: 'string',
      processedNum: 'string',
      requestId: 'string',
      status: 'string',
      totalNum: 'string',
      unknownNum: 'string',
      uploadTime: 'string',
      validNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


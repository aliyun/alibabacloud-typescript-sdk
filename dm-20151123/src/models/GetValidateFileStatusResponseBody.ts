// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidateFileStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of catch-all addresses.
   * 
   * @example
   * 2
   */
  catchAllNum?: string;
  /**
   * @remarks
   * The task completion time.
   * 
   * @example
   * 2000-01-01T00:00:00Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The number of do-not-mail addresses.
   * 
   * @example
   * 1
   */
  doNotMailNum?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * file.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The number of invalid addresses.
   * 
   * @example
   * 2
   */
  invalidNum?: string;
  /**
   * @remarks
   * The task completion percentage.
   * 
   * @example
   * 100%
   */
  percentage?: string;
  /**
   * @remarks
   * The number of processed addresses.
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
   * The total number of addresses in the file.
   * 
   * @example
   * 10
   */
  totalNum?: string;
  /**
   * @remarks
   * The number of unknown addresses.
   * 
   * @example
   * 1
   */
  unknownNum?: string;
  /**
   * @remarks
   * The upload time.
   * 
   * @example
   * 2000-01-01T00:00:00Z
   */
  uploadTime?: string;
  /**
   * @remarks
   * The number of valid addresses.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidateFileStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  catchAllNum?: string;
  /**
   * @example
   * 2000-01-01T00:00:00Z
   */
  completeTime?: string;
  /**
   * @example
   * 1
   */
  doNotMailNum?: string;
  /**
   * @example
   * file.txt
   */
  fileName?: string;
  /**
   * @example
   * 2
   */
  invalidNum?: string;
  /**
   * @example
   * 100%
   */
  percentage?: string;
  /**
   * @example
   * 10
   */
  processedNum?: string;
  /**
   * @example
   * yyyy-yyyy-yyyy-yyyy
   */
  requestId?: string;
  /**
   * @example
   * completed
   */
  status?: string;
  /**
   * @example
   * 10
   */
  totalNum?: string;
  /**
   * @example
   * 1
   */
  unknownNum?: string;
  /**
   * @example
   * 2000-01-01T00:00:00Z
   */
  uploadTime?: string;
  /**
   * @example
   * 4
   */
  validNum?: string;
  static names(): { [key: string]: string } {
    return {
      catchAllNum: 'CatchAllNum',
      completeTime: 'CompleteTime',
      doNotMailNum: 'DoNotMailNum',
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


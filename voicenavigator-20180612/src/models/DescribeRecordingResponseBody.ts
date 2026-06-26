// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 2019080913202222.wav
   */
  fileName?: string;
  /**
   * @remarks
   * The file download URL.
   * 
   * @example
   * url
   */
  filePath?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  voiceSliceRecordingListJson?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      filePath: 'FilePath',
      requestId: 'RequestId',
      voiceSliceRecordingListJson: 'VoiceSliceRecordingListJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      filePath: 'string',
      requestId: 'string',
      voiceSliceRecordingListJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


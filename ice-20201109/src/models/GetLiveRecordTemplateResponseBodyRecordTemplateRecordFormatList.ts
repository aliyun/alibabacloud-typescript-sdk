// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveRecordTemplateResponseBodyRecordTemplateRecordFormatList extends $dara.Model {
  /**
   * @remarks
   * The duration of the recording cycle. Unit: seconds. If you do not specify this parameter, the default value 6 hours is used.
   * 
   * @example
   * 7200
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The output file format.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The name of the recording file that is stored in Object Storage Service (OSS).
   * 
   * @example
   * record/{JobId}/{Sequence}{EscapedStartTime}{EscapedEndTime}
   */
  ossObjectPrefix?: string;
  /**
   * @remarks
   * The duration of a single segment. Unit: seconds.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * The name of the TS segment.
   * 
   * @example
   * record/{JobId}/{UnixTimestamp}_{Sequence}
   */
  sliceOssObjectPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceDuration: 'SliceDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      ossObjectPrefix: 'string',
      sliceDuration: 'number',
      sliceOssObjectPrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


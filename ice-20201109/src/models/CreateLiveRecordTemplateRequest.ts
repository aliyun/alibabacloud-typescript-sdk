// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveRecordTemplateRequestRecordFormat extends $dara.Model {
  /**
   * @remarks
   * The duration of a recording cycle. Unit: seconds. If you do not specify this parameter, the default value is 6 hours.
   * 
   * > - If a live stream is interrupted during a recording cycle but resumes within 3 minutes, the recording continues in the same recording file.
   * - A live stream must be interrupted for more than 3 minutes before the last recording file is generated. If you need to change the default 3-minute interruption threshold, submit a ticket.
   * 
   * @example
   * 3600
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The format.
   * 
   * > If you select the m3u8 format, you must also set the SliceOssObjectPrefix and SliceDuration request parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The name of the recording file stored in OSS.
   * 
   * - The file name must be less than 256 bytes in size and supports variable matching. Supported variables include {JobId}, {Sequence}, {StartTime}, {EndTime}, {EscapedStartTime}, and {EscapedEndTime}.
   * 
   * - The parameter value must contain {StartTime} or {EscapedStartTime}, and {EndTime} or {EscapedEndTime}.
   * 
   * @example
   * record/{JobId}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}
   */
  ossObjectPrefix?: string;
  /**
   * @remarks
   * The duration of a single slice. Unit: seconds.
   * > This parameter is valid only when Format is set to m3u8.
   * 
   * If you do not specify this parameter, the default value is 30 seconds. Valid values: 5 to 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * The name of the TS slice.
   * 
   * > You need to configure this parameter only when Format is set to m3u8.
   * 
   * - By default, a slice is generated every 30 seconds. The name must be less than 256 bytes in size and supports variable matching. Supported variables include {JobId}, {UnixTimestamp}, and {Sequence}.
   * - The parameter value must contain the {UnixTimestamp} and {Sequence} variables.
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

export class CreateLiveRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * test-record-template
   */
  name?: string;
  /**
   * @remarks
   * The list of recording formats.
   * 
   * This parameter is required.
   */
  recordFormat?: CreateLiveRecordTemplateRequestRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      recordFormat: { 'type': 'array', 'itemType': CreateLiveRecordTemplateRequestRecordFormat },
    };
  }

  validate() {
    if(Array.isArray(this.recordFormat)) {
      $dara.Model.validateArray(this.recordFormat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


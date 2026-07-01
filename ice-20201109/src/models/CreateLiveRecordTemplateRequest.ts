// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveRecordTemplateRequestRecordFormat extends $dara.Model {
  /**
   * @remarks
   * The duration of a recording cycle in seconds. If you omit this parameter, it defaults to 6 hours.
   * 
   * > - If a stream interruption during a recording cycle lasts less than 3 minutes, the recording continues in the same Recording File.
   * 
   * - A Recording File is finalized only after a stream interruption lasts for more than 3 minutes. To change this default 3-minute threshold, submit a ticket.
   * 
   * @example
   * 3600
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The recording format.
   * 
   * > If you set this parameter to `m3u8`, you must also specify the `SliceOssObjectPrefix` and `SliceDuration` parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The name of the Recording File stored in Object Storage Service (OSS).
   * 
   * - The file name must be less than 256 bytes and supports the following variables: {JobId}, {Sequence}, {StartTime}, {EndTime}, {EscapedStartTime}, and {EscapedEndTime}.
   * 
   * - The value must include either the {StartTime} or {EscapedStartTime} variable and either the {EndTime} or {EscapedEndTime} variable.
   * 
   * @example
   * record/{JobId}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}
   */
  ossObjectPrefix?: string;
  /**
   * @remarks
   * The duration of each slice in seconds.
   * 
   * > This parameter is valid only when `Format` is set to `m3u8`.
   * 
   * The default value is 30. The value must be an integer from 5 to 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * The name of the TS slice.
   * 
   * > This parameter is required only when `Format` is set to `m3u8`.
   * 
   * - The file name must be less than 256 bytes and supports the following variables: {JobId}, {UnixTimestamp}, and {Sequence}.
   * 
   * - The value must include the {UnixTimestamp} and {Sequence} variables.
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
   * The name of the Live Record Template.
   * 
   * This parameter is required.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveSnapshotTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The naming format of the snapshot captured in overwrite mode.
   * 
   * *   The value cannot start with a forward slash (/). Only the suffix .jpg is supported.
   * *   It cannot exceed 255 characters in length.
   * *   The {JobId} placeholder is supported. It specifies the ID of the snapshot job.
   * *   Placeholders such as {UnixTimestamp}, {Sequence}, and {Date} are not allowed.
   * *   You must specify at least one of the OverwriteFormat and SequenceFormat parameters.
   * 
   * @example
   * snapshot/{JobId}.jpg
   */
  overwriteFormat?: string;
  /**
   * @remarks
   * The naming format of the snapshot captured in time series mode.
   * 
   * *   The value cannot start with a forward slash (/). Only the suffix .jpg is supported.
   * *   It cannot exceed 255 characters in length.
   * *   The {JobId}, {Date}, {UnixTimestamp}, and {Sequence} placeholders are supported. {JobId} specifies the ID of the snapshot job. {Date} specifies the date on which the snapshot is captured. {UnixTimestamp} specifies the timestamp of the snapshot. {Sequence} specifies the sequence number of the snapshot. You must specify at least one of the {UnixTimestamp} and {Sequence} placeholders.
   * *   You must specify at least one of the OverwriteFormat and SequenceFormat parameters.
   * 
   * @example
   * snapshot/{JobId}/{UnixTimestamp}.jpg
   */
  sequenceFormat?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * *   It cannot exceed 128 characters in length.
   * 
   * This parameter is required.
   */
  templateName?: string;
  /**
   * @remarks
   * The interval between two adjacent snapshots. Unit: seconds.
   * 
   * *   Valid values: [5,3600].
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  timeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      overwriteFormat: 'OverwriteFormat',
      sequenceFormat: 'SequenceFormat',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteFormat: 'string',
      sequenceFormat: 'string',
      templateName: 'string',
      timeInterval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveSnapshotTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The file format for overwrite snapshots.
   * - It cannot start with a forward slash (/) and currently supports only the .jpg extension.
   * - The maximum length is 255 characters.
   * - Supported placeholder: {JobId}, which indicates the snapshot job ID.
   * - Placeholders such as {UnixTimestamp}, {Sequence}, and {Date} are not allowed.
   * - You must specify at least one of the file formats for overwrite snapshots and sequence snapshots.
   * 
   * @example
   * snapshot/{JobId}.jpg
   */
  overwriteFormat?: string;
  /**
   * @remarks
   * The file format for sequence snapshots.
   * - It cannot start with a forward slash (/) and currently supports only the .jpg extension.
   * - The maximum length is 255 characters.
   * - Supported placeholders: {JobId} (snapshot job ID), {Date} (snapshot date), {UnixTimestamp} (timestamp), and {Sequence} (sequence number). You must specify at least one of {UnixTimestamp} and {Sequence}.
   * - You must specify at least one of the file formats for overwrite snapshots and sequence snapshots.
   * 
   * @example
   * snapshot/{JobId}/{UnixTimestamp}.jpg
   */
  sequenceFormat?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name. The maximum length is 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * template1
   */
  templateName?: string;
  /**
   * @remarks
   * The time interval between snapshots, in seconds. Valid values: 5 to 3600.
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
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteFormat: 'string',
      sequenceFormat: 'string',
      templateId: 'string',
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


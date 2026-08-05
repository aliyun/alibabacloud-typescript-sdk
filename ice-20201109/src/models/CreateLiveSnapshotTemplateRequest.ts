// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveSnapshotTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The overwrite snapshot file format.
   * 
   * - The value cannot start with "/". Only the .jpg suffix is supported.
   * - Maximum length: 255.
   * - Supported placeholder: {JobId}: snapshot task ID.
   * - The placeholders {UnixTimestamp}, {Sequence}, and {Date} are not allowed.
   * - At least one of the overwrite snapshot format or sequence snapshot format must be specified.
   * 
   * @example
   * snapshot/{JobId}.jpg
   */
  overwriteFormat?: string;
  /**
   * @remarks
   * The sequence snapshot file format.
   * - The value cannot start with "/". Only the .jpg suffix is supported.
   * - Maximum length: 255.
   * - Supported placeholders: {JobId}: snapshot task ID, {Date}: snapshot date, {UnixTimestamp}: timestamp, {Sequence}: serial number. At least one of {UnixTimestamp} or {Sequence} must be specified.
   * - At least one of the overwrite snapshot format or sequence snapshot format must be specified.
   * 
   * @example
   * snapshot/{JobId}/{UnixTimestamp}.jpg
   */
  sequenceFormat?: string;
  /**
   * @remarks
   * The template name.
   * - Maximum length: 128.
   * 
   * This parameter is required.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The snapshot time interval. Unit: seconds.
   * - Valid values: 5 to 3600.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertOutputGroupOutput extends $dara.Model {
  /**
   * @remarks
   * The feature parameters.
   * 
   * @example
   * {}
   */
  features?: string;
  /**
   * @remarks
   * A name to label this output. This is for identification purposes only and does not affect the filename.
   * 
   * @example
   * group-output
   */
  name?: string;
  /**
   * @remarks
   * The filename for this output. This path is relative to OutputFileBase defined in MediaConvertOutputGroupConfig. The final output path is {OutputFileBase}/{OutputFileName}.
   * 
   * @example
   * 720p.mp4
   */
  outputFileName?: string;
  /**
   * @remarks
   * A JSON string containing parameters to override the settings from the associated transcoding template.
   * 
   * @example
   * {}
   */
  overrideParams?: string;
  /**
   * @remarks
   * The processing priority for this output. Valid values: 1 to 10. A higher value indicates higher priority. Default value: 6.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      name: 'Name',
      outputFileName: 'OutputFileName',
      overrideParams: 'OverrideParams',
      priority: 'Priority',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: 'string',
      name: 'string',
      outputFileName: 'string',
      overrideParams: 'string',
      priority: 'number',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


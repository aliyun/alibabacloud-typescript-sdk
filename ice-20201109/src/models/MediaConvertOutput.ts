// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaObject } from "./MediaObject";


export class MediaConvertOutput extends $dara.Model {
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
   * The name of the output.
   * 
   * @example
   * output-video
   */
  name?: string;
  /**
   * @remarks
   * The output file.
   */
  outputFile?: MediaObject;
  /**
   * @remarks
   * A JSON string containing parameters to overwrite the corresponding settings of the template.
   * 
   * @example
   * {}
   */
  overrideParams?: string;
  /**
   * @remarks
   * The priority. Valid values: 1 to 10. A larger value indicates a higher priority. Default value: 6.
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
      outputFile: 'OutputFile',
      overrideParams: 'OverrideParams',
      priority: 'Priority',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: 'string',
      name: 'string',
      outputFile: MediaObject,
      overrideParams: 'string',
      priority: 'number',
      templateId: 'string',
    };
  }

  validate() {
    if(this.outputFile && typeof (this.outputFile as any).validate === 'function') {
      (this.outputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


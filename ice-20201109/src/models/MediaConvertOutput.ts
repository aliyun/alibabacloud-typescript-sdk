// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaObject } from "./MediaObject";


export class MediaConvertOutput extends $dara.Model {
  features?: string;
  name?: string;
  outputFile?: MediaObject;
  overrideParams?: string;
  priority?: number;
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


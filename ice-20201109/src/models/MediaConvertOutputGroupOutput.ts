// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertOutputGroupOutput extends $dara.Model {
  features?: string;
  name?: string;
  outputFileName?: string;
  overrideParams?: string;
  priority?: number;
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


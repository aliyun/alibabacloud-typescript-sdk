// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckShrinkRequestBgCustomTemplateExtraDTO extends $dara.Model {
  bgCustomTemplate?: string;
  bgCustomTemplateId?: number;
  bgCustomTemplateInfo?: string;
  bgCustomTemplateTitle?: string;
  bgVid?: string;
  extraInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bgCustomTemplate: 'BgCustomTemplate',
      bgCustomTemplateId: 'BgCustomTemplateId',
      bgCustomTemplateInfo: 'BgCustomTemplateInfo',
      bgCustomTemplateTitle: 'BgCustomTemplateTitle',
      bgVid: 'BgVid',
      extraInfo: 'ExtraInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgCustomTemplate: 'string',
      bgCustomTemplateId: 'number',
      bgCustomTemplateInfo: 'string',
      bgCustomTemplateTitle: 'string',
      bgVid: 'string',
      extraInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


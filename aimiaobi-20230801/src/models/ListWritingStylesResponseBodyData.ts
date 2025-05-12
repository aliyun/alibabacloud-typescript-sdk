// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WritingStyleTemplateDefine } from "./WritingStyleTemplateDefine";


export class ListWritingStylesResponseBodyData extends $dara.Model {
  distributeStepTemplateDefine?: WritingStyleTemplateDefine;
  /**
   * @example
   * false
   */
  distributeWriting?: boolean;
  emoji?: string;
  styleDescription?: string;
  styleImage?: string;
  styleKey?: string;
  styleName?: string;
  templateDefine?: WritingStyleTemplateDefine;
  static names(): { [key: string]: string } {
    return {
      distributeStepTemplateDefine: 'DistributeStepTemplateDefine',
      distributeWriting: 'DistributeWriting',
      emoji: 'Emoji',
      styleDescription: 'StyleDescription',
      styleImage: 'StyleImage',
      styleKey: 'StyleKey',
      styleName: 'StyleName',
      templateDefine: 'TemplateDefine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeStepTemplateDefine: WritingStyleTemplateDefine,
      distributeWriting: 'boolean',
      emoji: 'string',
      styleDescription: 'string',
      styleImage: 'string',
      styleKey: 'string',
      styleName: 'string',
      templateDefine: WritingStyleTemplateDefine,
    };
  }

  validate() {
    if(this.distributeStepTemplateDefine && typeof (this.distributeStepTemplateDefine as any).validate === 'function') {
      (this.distributeStepTemplateDefine as any).validate();
    }
    if(this.templateDefine && typeof (this.templateDefine as any).validate === 'function') {
      (this.templateDefine as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


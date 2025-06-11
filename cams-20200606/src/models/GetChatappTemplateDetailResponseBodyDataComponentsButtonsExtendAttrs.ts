// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs extends $dara.Model {
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * nextCard
   */
  action?: string;
  /**
   * @remarks
   * The intent code.
   * 
   * @example
   * test
   */
  intentCode?: string;
  /**
   * @remarks
   * The language of the next template.
   * 
   * @example
   * en
   */
  nextLanguageCode?: string;
  /**
   * @remarks
   * The code of the next template.
   * 
   * @example
   * 20939920093993
   */
  nextTemplateCode?: string;
  /**
   * @remarks
   * The name of the next template.
   * 
   * @example
   * abc
   */
  nextTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      intentCode: 'IntentCode',
      nextLanguageCode: 'NextLanguageCode',
      nextTemplateCode: 'NextTemplateCode',
      nextTemplateName: 'NextTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      intentCode: 'string',
      nextLanguageCode: 'string',
      nextTemplateCode: 'string',
      nextTemplateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


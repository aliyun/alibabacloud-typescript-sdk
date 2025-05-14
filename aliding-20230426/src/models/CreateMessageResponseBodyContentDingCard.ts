// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageResponseBodyContentDingCard extends $dara.Model {
  /**
   * @example
   * 卡片描述
   */
  cardDesc?: string;
  /**
   * @example
   * {}
   */
  content?: string;
  /**
   * @example
   * basic_card_schema
   */
  contentType?: string;
  /**
   * @example
   * true
   */
  finished?: boolean;
  /**
   * @example
   * templateId123
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      cardDesc: 'cardDesc',
      content: 'content',
      contentType: 'contentType',
      finished: 'finished',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardDesc: 'string',
      content: 'string',
      contentType: 'string',
      finished: 'boolean',
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


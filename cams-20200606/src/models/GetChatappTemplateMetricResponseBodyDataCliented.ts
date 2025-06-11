// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappTemplateMetricResponseBodyDataCliented extends $dara.Model {
  /**
   * @remarks
   * The text on the button.
   * 
   * @example
   * Open url
   */
  buttonContent?: string;
  /**
   * @remarks
   * The number of clicks.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The button type.
   * 
   * Valid values:
   * 
   * *   phone_number_button
   * *   url_button
   * *   quick_relpy_button
   * 
   * @example
   * quick_reply_button
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buttonContent: 'ButtonContent',
      count: 'Count',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttonContent: 'string',
      count: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


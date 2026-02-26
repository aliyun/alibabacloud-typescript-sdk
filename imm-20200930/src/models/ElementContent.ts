// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElementContent extends $dara.Model {
  /**
   * @remarks
   * The content of the element.
   * 
   * If the value of the Type parameter is image or link, this parameter indicates the placeholder text.
   * 
   * @example
   * Text
   */
  content?: string;
  /**
   * @remarks
   * The time range. The array length is fixed to 2. One element indicates the start time and the other one indicates the end time. Unit: milliseconds.
   */
  timeRange?: number[];
  /**
   * @remarks
   * The type of the element content.
   * 
   * Valid values:
   * 
   * *   text
   * *   image
   * *   link
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The link to the element content. This parameter takes effect only if the Type parameter is set to image or link.
   * 
   * @example
   * http://aliyun.com
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      timeRange: 'TimeRange',
      type: 'Type',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      timeRange: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
      URL: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.timeRange)) {
      $dara.Model.validateArray(this.timeRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


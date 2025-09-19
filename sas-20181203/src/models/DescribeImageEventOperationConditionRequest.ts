// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageEventOperationConditionRequest extends $dara.Model {
  /**
   * @remarks
   * The alert type.
   * 
   * *   Set the value to **sensitiveFile**.
   * 
   * @example
   * sensitiveFile
   */
  eventType?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


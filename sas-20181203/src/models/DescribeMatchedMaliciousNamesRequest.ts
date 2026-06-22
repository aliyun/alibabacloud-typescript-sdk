// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMatchedMaliciousNamesRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The risk levels of the malicious samples in images to query. You can specify multiple values. Separate multiple values with commas (,). Valid values:
   * - **serious**: urgent
   * - **suspicious**: suspicious
   * - **remind**: reminder.
   * 
   * @example
   * serious
   */
  levels?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      levels: 'Levels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      levels: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMatchedMaliciousNamesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The severity of the malicious image sample that you want to query. You can enter multiple severities. Separate the severities with commas (,). Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
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


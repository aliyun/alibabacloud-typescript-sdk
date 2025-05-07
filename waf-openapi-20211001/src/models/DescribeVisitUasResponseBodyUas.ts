// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVisitUasResponseBodyUas extends $dara.Model {
  /**
   * @remarks
   * The number of requests that use the user agent.
   * 
   * @example
   * 698455
   */
  count?: number;
  /**
   * @remarks
   * The user agent.
   * 
   * @example
   * chrome
   */
  ua?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ua: 'Ua',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ua: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


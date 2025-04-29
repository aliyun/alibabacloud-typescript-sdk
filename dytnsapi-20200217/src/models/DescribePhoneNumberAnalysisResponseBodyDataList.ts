// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberAnalysisResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * NO
   */
  code?: string;
  /**
   * @example
   * 18752785620
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


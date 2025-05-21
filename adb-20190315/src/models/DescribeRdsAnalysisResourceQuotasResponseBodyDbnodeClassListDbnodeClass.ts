// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassListDBNodeClass extends $dara.Model {
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * E32
   */
  text?: string;
  /**
   * @remarks
   * The real value.
   * 
   * @example
   * E32
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


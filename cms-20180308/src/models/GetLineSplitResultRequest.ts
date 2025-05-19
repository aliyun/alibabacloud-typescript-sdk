// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLineSplitResultRequest extends $dara.Model {
  line?: string;
  prefix?: string;
  regex?: string;
  selectContent?: string;
  /**
   * @example
   * simple|regex
   */
  splitType?: string;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      prefix: 'Prefix',
      regex: 'Regex',
      selectContent: 'SelectContent',
      splitType: 'SplitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      prefix: 'string',
      regex: 'string',
      selectContent: 'string',
      splitType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


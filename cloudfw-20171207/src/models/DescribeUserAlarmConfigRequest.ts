// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAlarmConfigRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 59.82.135.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


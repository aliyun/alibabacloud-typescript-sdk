// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizedStrategyTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for requests and responses. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 39.170.43.**
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


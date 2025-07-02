// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FunctionLayer extends $dara.Model {
  /**
   * @example
   * acs:fc:cn-beijing:186824xxxxxx:layers/fc_layer/versions/1
   */
  arn?: string;
  /**
   * @example
   * 421
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      arn: 'arn',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


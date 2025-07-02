// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConcurrencyConfig extends $dara.Model {
  /**
   * @example
   * acs:fc:cn-shanghai:123:functions/demo
   */
  functionArn?: string;
  /**
   * @example
   * 10
   */
  reservedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      functionArn: 'functionArn',
      reservedConcurrency: 'reservedConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArn: 'string',
      reservedConcurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


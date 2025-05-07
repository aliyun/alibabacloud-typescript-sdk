// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FreeResourceDetail extends $dara.Model {
  /**
   * @example
   * 2
   */
  amount?: number;
  /**
   * @example
   * CPU
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


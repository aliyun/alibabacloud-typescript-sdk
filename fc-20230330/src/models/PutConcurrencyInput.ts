// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutConcurrencyInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  reservedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      reservedConcurrency: 'reservedConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


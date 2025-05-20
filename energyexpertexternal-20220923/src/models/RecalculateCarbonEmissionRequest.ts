// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecalculateCarbonEmissionRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20240202-01
   */
  code?: string;
  /**
   * @remarks
   * Year of inventory.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
  year?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      year: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


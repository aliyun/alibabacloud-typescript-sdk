// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAreaElecConstituteRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * Z-20240115-2
   */
  code?: string;
  /**
   * @remarks
   * Year.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      year: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


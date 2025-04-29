// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AirportSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  keyword?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


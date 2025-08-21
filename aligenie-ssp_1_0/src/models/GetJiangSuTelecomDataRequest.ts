// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJiangSuTelecomDataRequest extends $dara.Model {
  /**
   * @example
   * 2024-11-09
   */
  date?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


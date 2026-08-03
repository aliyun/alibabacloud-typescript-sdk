// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJiangSuTelecomDataRequest extends $dara.Model {
  /**
   * @remarks
   * Date in the format yyyy-MM-dd. This refers to the data timestamp when the data becomes available, not the date when the data was generated. Data is always produced on a T+1 basis.
   * 
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


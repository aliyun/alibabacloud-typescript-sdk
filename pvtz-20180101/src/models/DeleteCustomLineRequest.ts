// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomLineRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045001
   */
  lineId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      lineId: 'LineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      lineId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


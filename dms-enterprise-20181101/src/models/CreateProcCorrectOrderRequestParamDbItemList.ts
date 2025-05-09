// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcCorrectOrderRequestParamDbItemList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19721978
   */
  dbId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


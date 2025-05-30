// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUrgentDemandItemRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111222
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111222
   */
  modifier?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      modifier: 'modifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      modifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


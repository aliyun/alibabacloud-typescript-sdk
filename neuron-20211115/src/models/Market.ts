// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Market extends $dara.Model {
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 内部市场
   */
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


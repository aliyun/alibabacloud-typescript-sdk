// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDcdnWafGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom WAF rule group.
   * 
   * @example
   * 30000135
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


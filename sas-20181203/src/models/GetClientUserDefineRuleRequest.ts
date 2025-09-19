// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientUserDefineRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom defense rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 200****
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


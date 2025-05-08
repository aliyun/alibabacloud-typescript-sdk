// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafManagedRulesRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * Action.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * Fuzzy search for rule ID or rule name.
   * 
   * @example
   * example
   */
  idNameLike?: string;
  /**
   * @remarks
   * List of rule protection levels.
   */
  protectionLevels?: number[];
  /**
   * @remarks
   * Status.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      idNameLike: 'IdNameLike',
      protectionLevels: 'ProtectionLevels',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      idNameLike: 'string',
      protectionLevels: { 'type': 'array', 'itemType': 'number' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protectionLevels)) {
      $dara.Model.validateArray(this.protectionLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


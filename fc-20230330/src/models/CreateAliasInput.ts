// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAliasInput extends $dara.Model {
  additionalVersionWeight?: { [key: string]: number };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prod
   */
  aliasName?: string;
  /**
   * @example
   * my alias
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      aliasName: 'aliasName',
      description: 'description',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      aliasName: 'string',
      description: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(this.additionalVersionWeight) {
      $dara.Model.validateMap(this.additionalVersionWeight);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


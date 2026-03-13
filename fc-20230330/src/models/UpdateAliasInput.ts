// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAliasInput extends $dara.Model {
  /**
   * @remarks
   * The weight of the canary release version.
   */
  additionalVersionWeight?: { [key: string]: number };
  /**
   * @remarks
   * The alias description.
   * 
   * @example
   * my alias
   */
  description?: string;
  /**
   * @remarks
   * The version to which the alias points.
   * 
   * @example
   * 1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      description: 'description',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
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


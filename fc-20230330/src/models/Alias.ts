// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Alias extends $dara.Model {
  /**
   * @remarks
   * The weight of the canary release version.
   */
  additionalVersionWeight?: { [key: string]: number };
  /**
   * @remarks
   * The name of the alias.
   * 
   * @example
   * prod
   */
  aliasName?: string;
  /**
   * @remarks
   * The time when the alias was created.
   * 
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the alias.
   * 
   * @example
   * alias for pre env
   */
  description?: string;
  /**
   * @remarks
   * The time when the alias was modified.
   * 
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  lastModifiedTime?: string;
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
      aliasName: 'aliasName',
      createdTime: 'createdTime',
      description: 'description',
      lastModifiedTime: 'lastModifiedTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      aliasName: 'string',
      createdTime: 'string',
      description: 'string',
      lastModifiedTime: 'string',
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


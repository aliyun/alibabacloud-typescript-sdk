// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Alias extends $dara.Model {
  additionalVersionWeight?: { [key: string]: number };
  /**
   * @example
   * prod
   */
  aliasName?: string;
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  createdTime?: string;
  /**
   * @example
   * alias for pre env
   */
  description?: string;
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  lastModifiedTime?: string;
  /**
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


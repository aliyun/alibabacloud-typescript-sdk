// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshObjectCachesRequest extends $dara.Model {
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  objectPath?: string;
  objectType?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      objectPath: 'string',
      objectType: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


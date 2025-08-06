// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BlockVodObjectCachesRequest extends $dara.Model {
  maxage?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  objectPath?: string;
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxage: 'Maxage',
      objectPath: 'ObjectPath',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxage: 'number',
      objectPath: 'string',
      ownerId: 'number',
      securityToken: 'string',
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


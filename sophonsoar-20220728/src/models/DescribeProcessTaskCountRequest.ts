// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessTaskCountRequest extends $dara.Model {
  /**
   * @remarks
   * The UUIDs of the entities.
   * 
   * This parameter is required.
   */
  entityUuidList?: string[];
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member whose permissions you want to use to call the operation.
   * 
   * @example
   * 104739******259
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - **0**: The view of the current Alibaba Cloud account.
   * 
   * - **1**: The view of all accounts that belong to the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      entityUuidList: 'EntityUuidList',
      lang: 'Lang',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityUuidList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityUuidList)) {
      $dara.Model.validateArray(this.entityUuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


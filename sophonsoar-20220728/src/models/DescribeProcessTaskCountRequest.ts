// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessTaskCountRequest extends $dara.Model {
  /**
   * @remarks
   * Collection of entity UUIDs.
   * 
   * This parameter is required.
   */
  entityUuidList?: string[];
  /**
   * @remarks
   * Language type for request and response messages. Values:
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
   * User ID for administrators to switch to other member\\"s perspective.
   * 
   * @example
   * 104739******259
   */
  roleFor?: number;
  /**
   * @remarks
   * View type.
   * 
   * - **0**: Current Alibaba Cloud account view.
   * - **1**: View for all accounts under the enterprise.
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


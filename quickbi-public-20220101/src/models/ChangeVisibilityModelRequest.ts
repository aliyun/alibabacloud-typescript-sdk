// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeVisibilityModelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the BI portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * The menu ID of the BI portal leaf node.
   * 
   * *   The directory menu cannot be authorized.
   * *   You can upload multiple parameters at a time. Separate multiple IDs with commas (,). The maximum number of parameters that can be modified at a time is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 54kqgoa****,pg1n135****
   */
  menuIds?: string;
  /**
   * @remarks
   * Whether only authorization is visible. Valid values:
   * 
   * *   true: Only the authorization is visible.
   * *   false: Both are visible.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  showOnlyWithAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
      menuIds: 'MenuIds',
      showOnlyWithAccess: 'ShowOnlyWithAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
      menuIds: 'string',
      showOnlyWithAccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLakeHouseSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the development database. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2435****
   */
  devDbId?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **14**: AnalyticDB for MySQL
   * *   **18**: AnalyticDB for PostgreSQL
   * 
   * This parameter is required.
   * 
   * @example
   * 14
   */
  dwDbType?: string;
  /**
   * @remarks
   * The mode in which the workspace runs. Valid values:
   * 
   * *   **0**: basic mode. This mode is unavailable.
   * *   **1**: standard mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the production database. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the ID.
   * 
   * @example
   * 2442****
   */
  prodDbId?: string;
  /**
   * @remarks
   * The configuration of the workspace. Valid values:
   * 
   * *   **skipManualRunCheck**: No security rule check is required in the trial run phase.
   * *   **skipPublishApprove**: No approval is required for publishing and O\\&M.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"skipManualRunCheck\\":true,\\"skipPublishApprove\\":true}
   */
  spaceConfig?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test_space
   */
  spaceName?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      devDbId: 'DevDbId',
      dwDbType: 'DwDbType',
      mode: 'Mode',
      prodDbId: 'ProdDbId',
      spaceConfig: 'SpaceConfig',
      spaceName: 'SpaceName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      devDbId: 'string',
      dwDbType: 'string',
      mode: 'string',
      prodDbId: 'string',
      spaceConfig: 'string',
      spaceName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


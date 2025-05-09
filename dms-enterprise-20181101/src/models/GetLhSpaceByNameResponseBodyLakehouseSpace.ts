// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLhSpaceByNameResponseBodyLakehouseSpace extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who creates the workspace.
   * 
   * @example
   * 51***
   */
  creatorId?: string;
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
   * The ID of the development database.
   * 
   * @example
   * 2435****
   */
  devDbId?: number;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **14**: AnalyticDB for MySQL
   * *   **18**: AnalyticDB for PostgreSQL
   * 
   * @example
   * 14
   */
  dwDbType?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the workspace is deleted. Valid values:
   * 
   * *   **true**: The workspace is deleted.
   * *   **false**: The workspace is not deleted.
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The mode in which the workspace runs. Valid values:
   * 
   * *   **0**: basic mode
   * *   **1**: standard mode
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The ID of the production database.
   * 
   * @example
   * 2442****
   */
  prodDbId?: number;
  /**
   * @remarks
   * The configuration of the workspace. Valid values:
   * 
   * *   **skipManualRunCheck**: No security rule check is required in the trial run phase.
   * *   **skipPublishApprove**: No approval is required for publishing and O\\&M.
   * 
   * @example
   * {\\"skipManualRunCheck\\":true,\\"skipPublishApprove\\":true}
   */
  spaceConfig?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * test_space
   */
  spaceName?: string;
  /**
   * @remarks
   * The ID of the tenant to which the workspace belongs.
   * 
   * @example
   * 3***
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      description: 'Description',
      devDbId: 'DevDbId',
      dwDbType: 'DwDbType',
      id: 'Id',
      isDeleted: 'IsDeleted',
      mode: 'Mode',
      prodDbId: 'ProdDbId',
      spaceConfig: 'SpaceConfig',
      spaceName: 'SpaceName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      description: 'string',
      devDbId: 'number',
      dwDbType: 'string',
      id: 'number',
      isDeleted: 'boolean',
      mode: 'number',
      prodDbId: 'number',
      spaceConfig: 'string',
      spaceName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


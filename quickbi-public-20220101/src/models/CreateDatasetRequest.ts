// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7AAB95D-*****-****-*4FC0C976
   */
  dsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * st_trd_user_purchase_day_inc
   */
  tableName?: string;
  /**
   * @example
   * asah-fsdfsf*****92342
   */
  targetDirectoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userDefineCubeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 726bee5a-****-43e1-9a8e-b550f0120f35
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 726bee5a-****-43e1-9a8e-b550f0120f35
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dsId: 'DsId',
      tableName: 'TableName',
      targetDirectoryId: 'TargetDirectoryId',
      userDefineCubeName: 'UserDefineCubeName',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsId: 'string',
      tableName: 'string',
      targetDirectoryId: 'string',
      userDefineCubeName: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


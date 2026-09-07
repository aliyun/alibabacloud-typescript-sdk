// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountPrivilegesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * The list of granted permissions.
   */
  accountPrivilegesShrink?: string;
  /**
   * @remarks
   * <props="china">The cluster ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The cluster ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k5p066e1a****
   */
  DBClusterId?: string;
  promqlInsertPrivilegesShrink?: string;
  promqlSelectNodePercentage?: number;
  promqlSelectPrivilegesShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilegesShrink: 'AccountPrivileges',
      DBClusterId: 'DBClusterId',
      promqlInsertPrivilegesShrink: 'PromqlInsertPrivileges',
      promqlSelectNodePercentage: 'PromqlSelectNodePercentage',
      promqlSelectPrivilegesShrink: 'PromqlSelectPrivileges',
      regionId: 'RegionId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilegesShrink: 'string',
      DBClusterId: 'string',
      promqlInsertPrivilegesShrink: 'string',
      promqlSelectNodePercentage: 'number',
      promqlSelectPrivilegesShrink: 'string',
      regionId: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


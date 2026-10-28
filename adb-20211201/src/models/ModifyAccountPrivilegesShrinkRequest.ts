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
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k5p066e1a****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list of PromQL write permissions.
   */
  promqlInsertPrivilegesShrink?: string;
  /**
   * @remarks
   * The percentage of PromQL query nodes.
   * 
   * @example
   * 0.6
   */
  promqlSelectNodePercentage?: number;
  /**
   * @remarks
   * The list of PromQL query permissions.
   */
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
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test_group
   */
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


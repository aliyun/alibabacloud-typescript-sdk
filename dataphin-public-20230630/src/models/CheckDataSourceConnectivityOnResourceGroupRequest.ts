// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDataSourceConnectivityOnResourceGroupRequestCheckCommandConfigItemList extends $dara.Model {
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * @example
   * jdbc.url
   */
  key?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * jdbc:mysql://host:port/database
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityOnResourceGroupRequestCheckCommand extends $dara.Model {
  /**
   * @remarks
   * The connection configuration items. If DataSourceId is specified, this parameter is optional and the saved configurations of the data source are used by default.
   */
  configItemList?: CheckDataSourceConnectivityOnResourceGroupRequestCheckCommandConfigItemList[];
  /**
   * @remarks
   * The data source ID. This parameter is optional. If specified, the check result is associated with the data source and visible on the data source page, and the old check records of the data source on the target resource group are cleared first. If Type and ConfigItemList are not specified, the saved type and configurations of the data source are used for the check.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The ID of the schedule resource group. The connectivity check task is executed on this resource group.
   * 
   * @example
   * rg_269xxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The data source type. If DataSourceId is specified, this parameter is optional and the saved type of the data source is used by default.
   * 
   * @example
   * MYSQL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configItemList: 'ConfigItemList',
      dataSourceId: 'DataSourceId',
      resourceGroupId: 'ResourceGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemList: { 'type': 'array', 'itemType': CheckDataSourceConnectivityOnResourceGroupRequestCheckCommandConfigItemList },
      dataSourceId: 'string',
      resourceGroupId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configItemList)) {
      $dara.Model.validateArray(this.configItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityOnResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The check object.
   * 
   * This parameter is required.
   */
  checkCommand?: CheckDataSourceConnectivityOnResourceGroupRequestCheckCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      checkCommand: 'CheckCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCommand: CheckDataSourceConnectivityOnResourceGroupRequestCheckCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.checkCommand && typeof (this.checkCommand as any).validate === 'function') {
      (this.checkCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


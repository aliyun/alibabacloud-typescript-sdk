// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDataSourceConnectivityOnResourceGroupRequestCheckCommandConfigItemList extends $dara.Model {
  /**
   * @example
   * jdbc.url
   */
  key?: string;
  /**
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
  configItemList?: CheckDataSourceConnectivityOnResourceGroupRequestCheckCommandConfigItemList[];
  /**
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @example
   * rg_269xxxxx
   */
  resourceGroupId?: string;
  /**
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
   * This parameter is required.
   */
  checkCommand?: CheckDataSourceConnectivityOnResourceGroupRequestCheckCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
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


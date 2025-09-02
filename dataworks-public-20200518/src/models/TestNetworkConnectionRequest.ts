// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestNetworkConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_name
   */
  datasourceName?: string;
  /**
   * @remarks
   * The environment in which the data source resides. Valid values:
   * 
   * *   0: development environment
   * *   1: production environment
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the data source belongs. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The identifier of the resource group. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the identifier of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * S_res_group_2XXXX4_1619100XXXXX
   */
  resourceGroup?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceName: 'DatasourceName',
      envType: 'EnvType',
      projectId: 'ProjectId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceName: 'string',
      envType: 'string',
      projectId: 'number',
      resourceGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


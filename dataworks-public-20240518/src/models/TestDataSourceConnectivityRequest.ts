// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestDataSourceConnectivityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source for which you want to test the network connectivity.
   * 
   * This parameter is required.
   * 
   * @example
   * 144544
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      projectId: 'ProjectId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      projectId: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


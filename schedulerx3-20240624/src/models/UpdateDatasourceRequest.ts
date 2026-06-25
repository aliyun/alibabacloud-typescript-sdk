// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasourceRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Data source connection parameters
   * 
   * @example
   * {"host":"rm-bp1f03mxxxxx.mysql.rds.aliyuncs.com","port":3306,"userName":"test01","database":"test01","other":{"useSSL":"false"}}
   */
  connectionParams?: string;
  /**
   * @remarks
   * DataSource ID, which can be obtained by calling the ListDatasources API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  datasourceId?: number;
  /**
   * @remarks
   * Data source description
   * 
   * @example
   * None
   */
  description?: string;
  /**
   * @remarks
   * Datasource Name
   * 
   * @example
   * 账单拉取-支付宝团购
   */
  name?: string;
  /**
   * @remarks
   * Database password
   * 
   * @example
   * 2F9e9@a69c!e18b569c8
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectionParams: 'ConnectionParams',
      datasourceId: 'DatasourceId',
      description: 'Description',
      name: 'Name',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectionParams: 'string',
      datasourceId: 'number',
      description: 'string',
      name: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


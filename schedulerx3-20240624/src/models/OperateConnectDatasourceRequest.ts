// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateConnectDatasourceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The connection parameters of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * {"host":"rm-bp1f03mxxxxx.mysql.rds.aliyuncs.com","port":3306,"userName":"test01","database":"test01","other":{"useSSL":"false"}}
   */
  connectionParams?: string;
  /**
   * @remarks
   * The password of the database user.
   * 
   * This parameter is required.
   * 
   * @example
   * Demo****1234
   */
  password?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectionParams: 'ConnectionParams',
      password: 'Password',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectionParams: 'string',
      password: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


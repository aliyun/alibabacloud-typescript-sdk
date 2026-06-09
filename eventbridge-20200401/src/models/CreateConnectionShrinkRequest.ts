// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are configured for authentication.
   */
  authParametersShrink?: string;
  /**
   * @remarks
   * The name of the connection. The name must be 2 to 127 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the connection. The description can be up to 255 characters in length.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The parameters that are configured for the network.
   * 
   * This parameter is required.
   */
  networkParametersShrink?: string;
  /**
   * @remarks
   * 数据源连接参数（JSON 对象），Type 为数据源类型时必填，Http 类型不需要。具体字段定义请调用 GetConnectionType 接口，参考返回结果中的 ParamsSchema
   * 
   * @example
   * {"HostName":"xxx.mysql.rds.aliyuncs.com","Port":"3306","User":"root","Password":"xxx","DatabaseName":"demo_db"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * 连接类型。可选值：MySQL、PostgreSQL、Elasticsearch、Http。数据源类型连接必填，不传默认为 Http。Http 类型用于 API Destination 等 HTTP 协议目标；数据源类型用于集成广场的数据连接
   * 
   * @example
   * Http
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authParametersShrink: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      networkParametersShrink: 'NetworkParameters',
      parametersShrink: 'Parameters',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParametersShrink: 'string',
      connectionName: 'string',
      description: 'string',
      networkParametersShrink: 'string',
      parametersShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


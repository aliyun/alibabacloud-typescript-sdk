// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentInstancesResponseBodyComponentInstances extends $dara.Model {
  /**
   * @remarks
   * 应用名称。
   * 
   * @example
   * KNOX
   */
  applicationName?: string;
  /**
   * @remarks
   * 组件服务状态，取值如下：
   * - active：主服务
   * - standby：备用服务。
   * 
   * @example
   * active
   */
  bizState?: string;
  /**
   * @remarks
   * Commission状态，取值如下：
   * - COMMISSIONED：已上线
   * - COMMISSIONING：上线中
   * - DECOMMISSIONED：已下线
   * - DECOMMISSIONINPROGRESS：下线进程中
   * - DECOMMISSIONFAILED：下线失败
   * - INSERVICE：服务中
   * - UNKNOWN：未知状态。
   * <p>
   * 
   * @example
   * INSERVICE
   */
  commissionState?: string;
  /**
   * @remarks
   * 组件实例操作状态，取值如下：
   * - WAITING：等待中
   * - INSTALLING：安装中
   * - INSTALLED：已安装
   * - INSTALL_FAILED：安装失败
   * - STARTING：启动中
   * - STARTED：已启动
   * - START_FAILED：启动失败
   * - STOPPING：停止中
   * - STOPPED：已停止
   * - STOP_FAILED：停止失败
   * 
   * @example
   * STARTED
   */
  componentInstanceState?: string;
  /**
   * @remarks
   * 组件名称。
   * 
   * @example
   * KNOX
   */
  componentName?: string;
  /**
   * @remarks
   * 安装时间戳。
   * 
   * @example
   * 1628248947000
   */
  createTime?: number;
  /**
   * @remarks
   * 期望状态，取值如下：
   * - WAITING：等待中
   * - INSTALLING：安装中
   * - INSTALLED：已安装
   * - INSTALL_FAILED：安装失败
   * - STARTING：启动中
   * - STARTED：已启动
   * - START_FAILED：启动失败
   * - STOPPING：停止中
   * - STOPPED：已停止
   * - STOP_FAILED：停止失败。
   * 
   * @example
   * STARTED
   */
  desiredState?: string;
  /**
   * @remarks
   * 节点ID。
   * 
   * @example
   * i-bp17yy050pxo01m2****
   */
  nodeId?: string;
  /**
   * @remarks
   * 节点名称。
   * 
   * @example
   * emr-worker-1
   */
  nodeName?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      bizState: 'BizState',
      commissionState: 'CommissionState',
      componentInstanceState: 'ComponentInstanceState',
      componentName: 'ComponentName',
      createTime: 'CreateTime',
      desiredState: 'DesiredState',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      bizState: 'string',
      commissionState: 'string',
      componentInstanceState: 'string',
      componentName: 'string',
      createTime: 'number',
      desiredState: 'string',
      nodeId: 'string',
      nodeName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentInstancesResponseBody extends $dara.Model {
  componentInstances?: ListComponentInstancesResponseBodyComponentInstances[];
  /**
   * @remarks
   * 本次请求所返回的最大记录条数。
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * 返回读取到的数据位置，空代表数据已经读取完毕。
   * 
   * @example
   * “”
   */
  nextToken?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 7345241A-014C-17D2-A3AC-C72771188F46
   */
  requestId?: string;
  /**
   * @remarks
   * 本次请求条件下的数据总量。
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      componentInstances: 'ComponentInstances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentInstances: { 'type': 'array', 'itemType': ListComponentInstancesResponseBodyComponentInstances },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.componentInstances)) {
      $dara.Model.validateArray(this.componentInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


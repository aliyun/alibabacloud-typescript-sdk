// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentInstancesResponseBodyComponentInstances extends $dara.Model {
  /**
   * @remarks
   * 应用名称。
   * 
   * @example
   * HDFS
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
   */
  componentInstanceState?: string;
  /**
   * @remarks
   * 组件名称。
   * 
   * @example
   * DataNode
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
   * i-bp1cudc25w2bfwl5****
   */
  nodeId?: string;
  /**
   * @remarks
   * 节点名称。
   * 
   * @example
   * core1-1
   */
  nodeName?: string;
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


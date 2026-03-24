// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusManagedInstance extends $dara.Model {
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * 实例类型
   * 
   * @example
   * test
   */
  instanceType?: string;
  /**
   * @remarks
   * RUM关联的Prometheus实例ID
   * 
   * @example
   * rum-xxx
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * RUM关联的Prometheus实例名称
   * 
   * @example
   * rum-xxx
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * 阿里云RegionId
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 实例状态
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * 云监控2.0 workspace
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      instanceType: 'instanceType',
      prometheusInstanceId: 'prometheusInstanceId',
      prometheusInstanceName: 'prometheusInstanceName',
      regionId: 'regionId',
      status: 'status',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceType: 'string',
      prometheusInstanceId: 'string',
      prometheusInstanceName: 'string',
      regionId: 'string',
      status: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


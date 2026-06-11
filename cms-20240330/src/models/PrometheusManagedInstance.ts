// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusManagedInstance extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * test
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the Prometheus instance that is associated with Real User Monitoring (RUM).
   * 
   * @example
   * rum-xxx
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * The name of the Prometheus instance that is associated with RUM.
   * 
   * @example
   * rum-xxx
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The Cloud Monitor 2.0 workspace.
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


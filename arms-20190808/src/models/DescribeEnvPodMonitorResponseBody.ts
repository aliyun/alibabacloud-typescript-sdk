// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvPodMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The YAML string of the PodMonitor.
   * 
   * @example
   * Refer to supplementary instructions.
   */
  configYaml?: string;
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * @example
   * env-xxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the PodMonitor.
   * 
   * @example
   * podMonitor1
   */
  podMonitorName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   run
   * *   stop
   * 
   * @example
   * run
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configYaml: 'ConfigYaml',
      environmentId: 'EnvironmentId',
      namespace: 'Namespace',
      podMonitorName: 'PodMonitorName',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configYaml: 'string',
      environmentId: 'string',
      namespace: 'string',
      podMonitorName: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvPodMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: DescribeEnvPodMonitorResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A9C645C-C83F-4C9D-8CCB-29BEC9E1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeEnvPodMonitorResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


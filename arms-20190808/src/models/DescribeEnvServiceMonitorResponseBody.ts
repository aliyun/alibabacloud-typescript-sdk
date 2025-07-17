// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvServiceMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The YAML configuration file of the ServiceMonitor.
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the ServiceMonitor.
   * 
   * @example
   * serviceMonitor1
   */
  serviceMonitorName?: string;
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
      regionId: 'RegionId',
      serviceMonitorName: 'ServiceMonitorName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configYaml: 'string',
      environmentId: 'string',
      namespace: 'string',
      regionId: 'string',
      serviceMonitorName: 'string',
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

export class DescribeEnvServiceMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: DescribeEnvServiceMonitorResponseBodyData;
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
   * 40B10E04-81E8-4643-970D-F1B38F2E****
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
      data: DescribeEnvServiceMonitorResponseBodyData,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvServiceMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The namespace where the ServiceMonitor resides.
   * 
   * This parameter is required.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the ServiceMonitor.
   * 
   * This parameter is required.
   * 
   * @example
   * arms-admin1
   */
  serviceMonitorName?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'EnvironmentId',
      namespace: 'Namespace',
      regionId: 'RegionId',
      serviceMonitorName: 'ServiceMonitorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      namespace: 'string',
      regionId: 'string',
      serviceMonitorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


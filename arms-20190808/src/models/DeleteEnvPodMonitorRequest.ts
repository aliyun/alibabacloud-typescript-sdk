// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEnvPodMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The namespace where the PodMonitor is located.
   * 
   * This parameter is required.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the PodMonitor.
   * 
   * This parameter is required.
   * 
   * @example
   * arms-admin-pm1
   */
  podMonitorName?: string;
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
  static names(): { [key: string]: string } {
    return {
      environmentId: 'EnvironmentId',
      namespace: 'Namespace',
      podMonitorName: 'PodMonitorName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      namespace: 'string',
      podMonitorName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeARMServerInstancesResponseBodyServersAICInstancesNetworkAttributes } from "./DescribeArmserverInstancesResponseBodyServersAicinstancesNetworkAttributes";
import { DescribeARMServerInstancesResponseBodyServersAICInstancesSdgDeployInfo } from "./DescribeArmserverInstancesResponseBodyServersAicinstancesSdgDeployInfo";


export class DescribeARMServerInstancesResponseBodyServersAICInstances extends $dara.Model {
  /**
   * @remarks
   * The refresh rate of the AIC instance. Unit: Hz.
   * 
   * @example
   * 120
   */
  frequency?: number;
  /**
   * @remarks
   * The ID of the AIC image.
   * 
   * @example
   * m-****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the AIC instance.
   * 
   * @example
   * aic-instance****
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation that was most recently performed.
   * 
   * @example
   * ServerCreate
   */
  latestAction?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * AIC-Name
   */
  name?: string;
  /**
   * @remarks
   * The network attributes of the AIC instance.
   */
  networkAttributes?: DescribeARMServerInstancesResponseBodyServersAICInstancesNetworkAttributes;
  /**
   * @remarks
   * The resolution of the AIC instance.
   * 
   * @example
   * 1920*1080
   */
  resolution?: string;
  /**
   * @remarks
   * The information about the shared data group (SDG) that is deployed on the AIC instance.
   */
  sdgDeployInfo?: DescribeARMServerInstancesResponseBodyServersAICInstancesSdgDeployInfo;
  /**
   * @remarks
   * The specification of the AIC instance.
   * 
   * @example
   * aic.cf53r.c2.np
   */
  spec?: string;
  /**
   * @remarks
   * The operation status of the AIC instance. Valid values:
   * 
   * *   **success**
   * *   **failed**
   * *   **creating**
   * *   **releasing**
   * *   **rebooting**
   * *   **reseting**
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The running status of the AIC instance. Valid values:
   * 
   * *   **running**
   * *   **pending**
   * *   **terminating**
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      frequency: 'Frequency',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      latestAction: 'LatestAction',
      name: 'Name',
      networkAttributes: 'NetworkAttributes',
      resolution: 'Resolution',
      sdgDeployInfo: 'SdgDeployInfo',
      spec: 'Spec',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'number',
      imageId: 'string',
      instanceId: 'string',
      latestAction: 'string',
      name: 'string',
      networkAttributes: DescribeARMServerInstancesResponseBodyServersAICInstancesNetworkAttributes,
      resolution: 'string',
      sdgDeployInfo: DescribeARMServerInstancesResponseBodyServersAICInstancesSdgDeployInfo,
      spec: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.networkAttributes && typeof (this.networkAttributes as any).validate === 'function') {
      (this.networkAttributes as any).validate();
    }
    if(this.sdgDeployInfo && typeof (this.sdgDeployInfo as any).validate === 'function') {
      (this.sdgDeployInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRCDeploymentSetRequestTag } from "./CreateRcdeploymentSetRequestTag";


export class CreateRCDeploymentSetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The deployment set name. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (.), underscores (_), and hyphens (-).
   * 
   * @example
   * deployment_test
   */
  deploymentSetName?: string;
  /**
   * @remarks
   * The description of the deployment set. The value must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The number of groups in the deployment set. Valid values: 1 to 7.
   * 
   * Default value: 3.
   * 
   * >  This parameter takes effect only when `Strategy is set to AvailabilityGroup`.
   * 
   * @example
   * 3
   */
  groupCount?: number;
  /**
   * @remarks
   * The emergency solution to use in the scenario in which instances in the deployment set cannot be evenly distributed to different zones due to resource insufficiency after the instances failover. Valid values:
   * 
   * *   **CancelMembershipAndStart**: removes the instances from the deployment set and restarts the instances immediately after the failover is complete.
   * *   **KeepStopped**: does not remove the instances from the deployment set and keeps the instances in the Stopped state.
   * 
   * Default value: CancelMembershipAndStart.
   * 
   * @example
   * CancelMembershipAndStart
   */
  onUnableToRedeployFailedInstance?: string;
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
   * The deployment strategy. Valid values:
   * 
   * *   **Availability**: high-availability strategy
   * *   **AvailabilityGroup**: high-availability group strategy
   * *   **LowLatency**: low latency strategy
   * 
   * Default value: Availability.
   * 
   * @example
   * Availability
   */
  strategy?: string;
  tag?: CreateRCDeploymentSetRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deploymentSetName: 'DeploymentSetName',
      description: 'Description',
      groupCount: 'GroupCount',
      onUnableToRedeployFailedInstance: 'OnUnableToRedeployFailedInstance',
      regionId: 'RegionId',
      strategy: 'Strategy',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deploymentSetName: 'string',
      description: 'string',
      groupCount: 'number',
      onUnableToRedeployFailedInstance: 'string',
      regionId: 'string',
      strategy: 'string',
      tag: { 'type': 'array', 'itemType': CreateRCDeploymentSetRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


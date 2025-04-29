// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities } from "./DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities";
import { DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds } from "./DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds";


export class DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSet extends $dara.Model {
  /**
   * @remarks
   * Details of the capacities of the deployment set. This parameter is valid only when the deployment set contains ECS instances. The value contains information about the capacities of the deployment set in different zones.
   */
  capacities?: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities;
  /**
   * @remarks
   * The time when the deployment set was created.
   * 
   * @example
   * 2021-12-07T06:01:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the deployment set.
   * 
   * @example
   * testDeploymentSetDescription
   */
  deploymentSetDescription?: string;
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * @example
   * ds-bp67acfmxazb4ph****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The name of the deployment set.
   * 
   * @example
   * testDeploymentSetName
   */
  deploymentSetName?: string;
  /**
   * @remarks
   * The deployment strategy. The return value of this parameter is the value of the `Strategy` request parameter.
   * 
   * @example
   * Availability
   */
  deploymentStrategy?: string;
  /**
   * @remarks
   * The deployment domain.
   * 
   * @example
   * default
   */
  domain?: string;
  /**
   * @remarks
   * The deployment granularity.
   * 
   * @example
   * host
   */
  granularity?: string;
  /**
   * @remarks
   * The number of deployment set groups in the deployment set.
   * 
   * >  This parameter is valid only when the Strategy request parameter is set to AvailabilityGroup.
   * 
   * @example
   * 3
   */
  groupCount?: number;
  /**
   * @remarks
   * The number of instances in the deployment set.
   * 
   * @example
   * 3
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The IDs of the Elastic Compute Service (ECS) instances in the deployment set.
   */
  instanceIds?: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds;
  /**
   * @remarks
   * The deployment strategy.
   * 
   * @example
   * LooseDispersion
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      capacities: 'Capacities',
      creationTime: 'CreationTime',
      deploymentSetDescription: 'DeploymentSetDescription',
      deploymentSetId: 'DeploymentSetId',
      deploymentSetName: 'DeploymentSetName',
      deploymentStrategy: 'DeploymentStrategy',
      domain: 'Domain',
      granularity: 'Granularity',
      groupCount: 'GroupCount',
      instanceAmount: 'InstanceAmount',
      instanceIds: 'InstanceIds',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacities: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities,
      creationTime: 'string',
      deploymentSetDescription: 'string',
      deploymentSetId: 'string',
      deploymentSetName: 'string',
      deploymentStrategy: 'string',
      domain: 'string',
      granularity: 'string',
      groupCount: 'number',
      instanceAmount: 'number',
      instanceIds: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds,
      strategy: 'string',
    };
  }

  validate() {
    if(this.capacities && typeof (this.capacities as any).validate === 'function') {
      (this.capacities as any).validate();
    }
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


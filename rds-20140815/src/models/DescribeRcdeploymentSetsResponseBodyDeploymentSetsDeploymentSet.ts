// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities } from "./DescribeRcdeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities";
import { DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds } from "./DescribeRcdeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds";
import { DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags } from "./DescribeRcdeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags";


export class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet extends $dara.Model {
  /**
   * @remarks
   * The details of the capacities of the deployment set. This parameter is valid only when the deployment set contains existing RDS Custom instances. The value contains the details of the capacities of the deployment set in different zones.
   */
  capacities?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities;
  /**
   * @remarks
   * The time when the deployment set was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2024-06-19T07:15:44Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deployment set description.
   * 
   * @example
   * test
   */
  deploymentSetDescription?: string;
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-ob5n4rbgy****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The deployment set name.
   * 
   * @example
   * deployment_test
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
   * None
   */
  granularity?: string;
  /**
   * @remarks
   * The number of groups in the deployment set.
   * 
   * >  This parameter is valid only when the Strategy request parameter is set to AvailabilityGroup.
   * 
   * @example
   * 3
   */
  groupCount?: number;
  /**
   * @remarks
   * The number of RDS Custom instances in the deployment set.
   * 
   * @example
   * 1
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The ID of the RDS Custom instance in the deployment set.
   */
  instanceIds?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds;
  /**
   * @remarks
   * The deployment strategy.
   * 
   * @example
   * LooseDispersion
   */
  strategy?: string;
  tags?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags;
  static names(): { [key: string]: string } {
    return {
      capacities: 'Capacities',
      createTime: 'CreateTime',
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
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacities: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities,
      createTime: 'string',
      deploymentSetDescription: 'string',
      deploymentSetId: 'string',
      deploymentSetName: 'string',
      deploymentStrategy: 'string',
      domain: 'string',
      granularity: 'string',
      groupCount: 'number',
      instanceAmount: 'number',
      instanceIds: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds,
      strategy: 'string',
      tags: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags,
    };
  }

  validate() {
    if(this.capacities && typeof (this.capacities as any).validate === 'function') {
      (this.capacities as any).validate();
    }
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


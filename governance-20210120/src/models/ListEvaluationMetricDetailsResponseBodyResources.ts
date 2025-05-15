// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties } from "./ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties";


export class ListEvaluationMetricDetailsResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The compliance status of the resource. Valid values:
   * 
   * *   NonCompliant: non-compliant.
   * *   Excluded: ignored.
   * *   PendingExclusion: to be ignored.
   * *   PendingInclusion: to be unignored.
   * 
   * @example
   * NonCompliant
   */
  complianceType?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The check results further analyzed by auxiliary decision-making.
   * 
   * >  This parameter is returned only when the check item supports the auxiliary decision-making feature.
   * 
   * @example
   * RecentUnloginRamUser
   */
  resourceClassification?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 26435103783237****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource.
   * 
   * @example
   * 176618589410****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The attributes of the resource.
   */
  resourceProperties?: ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties[];
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::RAM::User
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      regionId: 'RegionId',
      resourceClassification: 'ResourceClassification',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceProperties: 'ResourceProperties',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      regionId: 'string',
      resourceClassification: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceProperties: { 'type': 'array', 'itemType': ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceProperties)) {
      $dara.Model.validateArray(this.resourceProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties extends $dara.Model {
  /**
   * @remarks
   * The name of the resource attribute.
   * 
   * @example
   * DisplayName
   */
  propertyName?: string;
  /**
   * @remarks
   * The value of the resource attribute.
   * 
   * @example
   * example
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyName: 'PropertyName',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyName: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListEvaluationMetricDetailsResponseBody extends $dara.Model {
  date?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAGEaXR18y1rqykZHIqRuBejOqED4S3Xne33c7zbn****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC9BD94C-D20C-4D27-88D4-89E8D75C****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the non-compliant resources.
   */
  resources?: ListEvaluationMetricDetailsResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListEvaluationMetricDetailsResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties extends $dara.Model {
  /**
   * @remarks
   * The name of the resource property.
   * 
   * @example
   * DisplayName
   */
  propertyName?: string;
  /**
   * @remarks
   * The value of the resource property.
   * 
   * @example
   * TestAccount
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
   * The compliance status. Valid values:
   * - NonCompliant: non-compliant.
   * - Excluded: ignored.
   * - PendingExclusion: ignored but not yet effective.
   * - PendingInclusion: unignored but not yet effective.
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
   * The decision assistance classification.
   * 
   * > This parameter is returned only for check items that support decision assistance.
   * 
   * @example
   * RecentUnloginRamUser
   */
  resourceClassification?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 26435103783237****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the resource belongs.
   * 
   * @example
   * 176618589410****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of additional resource properties.
   */
  resourceProperties?: ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties[];
  /**
   * @remarks
   * The resource type.
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
  /**
   * @remarks
   * The date.
   * 
   * @example
   * 2026-01-01
   */
  date?: string;
  /**
   * @remarks
   * The token used to retrieve the next page of data.
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
   * The details of non-compliant resources.
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


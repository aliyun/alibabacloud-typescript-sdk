// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoGroupingRemediationsRequest extends $dara.Model {
  /**
   * @example
   * 2022-01-01 00:00:00
   */
  earliestRemediationTime?: string;
  /**
   * @example
   * 2022-02-01 00:00:00
   */
  latestRemediationTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @example
   * i-23v38****
   */
  resourceId?: string;
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gr-acfnugygwms32yy
   */
  ruleId?: string;
  /**
   * @example
   * ecs
   */
  service?: string;
  /**
   * @example
   * rg-aekz26emqhc****
   */
  targetResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      earliestRemediationTime: 'EarliestRemediationTime',
      latestRemediationTime: 'LatestRemediationTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      service: 'Service',
      targetResourceGroupId: 'TargetResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      earliestRemediationTime: 'string',
      latestRemediationTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceId: 'string',
      resourceType: 'string',
      ruleId: 'string',
      service: 'string',
      targetResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


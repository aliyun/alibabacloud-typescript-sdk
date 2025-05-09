// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationGroupBillRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_application
   */
  applicationName?: string;
  /**
   * @remarks
   * The billing cycle, in the YYYY-MM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-06
   */
  billingCycle?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The application group name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_application_group
   */
  name?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the cloud resource.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ECS::INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      billingCycle: 'BillingCycle',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      billingCycle: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


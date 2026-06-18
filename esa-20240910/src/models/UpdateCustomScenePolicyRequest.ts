// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomScenePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the policy.
   * 
   * The time must be in UTC and in the ISO 8601 format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-03T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The site IDs to associate with the policy. Use a comma (,) to separate multiple IDs.
   * 
   * > This parameter is deprecated. We recommend using the `SiteIds` parameter instead. If the `SiteIds` parameter is specified, the `Objects` parameter is ignored. You must specify a value for either the `Objects` or `SiteIds` parameter.
   * 
   * @example
   * 123456****,123457****
   */
  objects?: string;
  /**
   * @remarks
   * To obtain the policy ID, call the [DescribeCustomScenePolicies](https://help.aliyun.com/document_detail/2850508.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  policyId?: number;
  /**
   * @remarks
   * The site IDs to associate with the policy. Use a comma (,) to separate multiple IDs.
   * 
   * @example
   * 123456****,123457****
   */
  siteIds?: string;
  /**
   * @remarks
   * The start time of the policy.
   * 
   * The time must be in UTC and in the ISO 8601 format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-03T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the template. Valid value:
   * 
   * - **promotion**: major promotion
   * 
   * This parameter is required.
   * 
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
      policyId: 'PolicyId',
      siteIds: 'SiteIds',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: 'string',
      policyId: 'number',
      siteIds: 'string',
      startTime: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


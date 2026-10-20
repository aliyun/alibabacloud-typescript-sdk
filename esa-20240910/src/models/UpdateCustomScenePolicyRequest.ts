// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomScenePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the policy.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-03T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the websites to associate. Separate multiple IDs with commas (,).
   * 
   * > **[Deprecated]** We recommend that you use the SiteIds parameter instead. If the SiteIds parameter is specified, the API operation uses the value of SiteIds and ignores the value of Objects. To avoid ambiguity in update operations, you must specify at least one of the SiteIds and Objects parameters.
   * 
   * @example
   * 123456****,123457****
   */
  objects?: string;
  /**
   * @remarks
   * The ID of the policy. You can call the [DescribeCustomScenePolicies](https://help.aliyun.com/document_detail/2850508.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  policyId?: number;
  /**
   * @remarks
   * The IDs of the websites to associate. Separate multiple IDs with commas (,).
   * 
   * @example
   * 123456****,123457****
   */
  siteIds?: string;
  /**
   * @remarks
   * The start time of the policy.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-03T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the template. Valid values:
   * - **promotion**: Important Activity.
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


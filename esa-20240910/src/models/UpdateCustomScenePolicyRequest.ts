// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomScenePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the policy expires.
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
   * The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
   * 
   * @example
   * 123456****
   */
  objects?: string;
  /**
   * @remarks
   * The policy ID, which can be obtained by calling the [DescribeCustomScenePolicies](https://help.aliyun.com/document_detail/2850508.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  policyId?: number;
  siteIds?: string;
  /**
   * @remarks
   * The time when the policy takes effect.
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
   * The name of the policy template. Valid value:
   * 
   * *   **promotion**: major events.
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


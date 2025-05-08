// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomScenePoliciesResponseBodyDataModule extends $dara.Model {
  /**
   * @remarks
   * The time when the policy expires.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-06T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the scenario-specific policy.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The IDs of websites that are associated with the policy.
   */
  objects?: string[];
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 1234****
   */
  policyId?: number;
  /**
   * @remarks
   * The time when the policy takes effect.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-04T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **Disabled**
   * *   **Pending**
   * *   **Running**
   * *   **Expired**
   * 
   * @example
   * Expired
   */
  status?: string;
  /**
   * @remarks
   * The name of the policy template. Valid value:
   * 
   * *   **promotion**: major events.
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
      startTime: 'StartTime',
      status: 'Status',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: { 'type': 'array', 'itemType': 'string' },
      policyId: 'number',
      startTime: 'string',
      status: 'string',
      template: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


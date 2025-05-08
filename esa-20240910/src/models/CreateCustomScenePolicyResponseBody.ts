// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomScenePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the policy expires.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-07T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The IDs of websites associated.
   */
  objects?: string[];
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 1
   */
  policyId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the policy takes effect.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-07T17:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the policy template.
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
      requestId: 'RequestId',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: { 'type': 'array', 'itemType': 'string' },
      policyId: 'number',
      requestId: 'string',
      startTime: 'string',
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


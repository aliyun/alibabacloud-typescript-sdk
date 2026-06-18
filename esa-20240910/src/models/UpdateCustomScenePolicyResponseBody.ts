// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomScenePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time of the policy.
   * 
   * The time is in UTC and in the ISO 8601 format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-04-03T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * A list of associated site IDs.
   * 
   * > This parameter is deprecated. We recommend that you use the `SiteIds` parameter instead.
   */
  objects?: string[];
  /**
   * @remarks
   * The ID of the policy.
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
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The associated site IDs. Multiple IDs are separated by a comma (,).
   * 
   * @example
   * 123456****,123457****
   */
  siteIds?: string;
  /**
   * @remarks
   * The start time of the policy.
   * 
   * The time is in UTC and in the ISO 8601 format: yyyy-MM-ddTHH:mm:ssZ.
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
      siteIds: 'SiteIds',
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
      siteIds: 'string',
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


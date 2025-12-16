// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxNotificationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The cursor for pagination. Leave this parameter empty for the first request. When the returned value is empty, all data has been retrieved.
   * 
   * @example
   * O39nXKu5XafATl3/cJjSJw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the notification policy. Supports fuzzy matching.
   * 
   * @example
   * test-weekdays
   */
  policyName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyName: 'PolicyName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


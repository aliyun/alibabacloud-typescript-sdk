// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionPlanActivitiesRequest extends $dara.Model {
  /**
   * @example
   * ap-hz036ubmx2qmw93k****
   */
  actionPlanId?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 1d2db86scXXXXXXXXXX
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      actionPlanId: 'ActionPlanId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


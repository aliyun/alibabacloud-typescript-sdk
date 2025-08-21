// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionPlansRequest extends $dara.Model {
  actionPlanIds?: string[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 1d2db86scXXXXXXXXXX
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      actionPlanIds: 'ActionPlanIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionPlanIds)) {
      $dara.Model.validateArray(this.actionPlanIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


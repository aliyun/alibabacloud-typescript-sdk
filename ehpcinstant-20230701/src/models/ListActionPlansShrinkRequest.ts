// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionPlansShrinkRequest extends $dara.Model {
  actionPlanIdsShrink?: string;
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
      actionPlanIdsShrink: 'ActionPlanIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanIdsShrink: 'string',
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


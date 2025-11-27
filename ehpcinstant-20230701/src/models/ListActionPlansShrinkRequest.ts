// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionPlansShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the execution plans to be queried.
   */
  actionPlanIdsShrink?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
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


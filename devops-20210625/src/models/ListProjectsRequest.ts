// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Project
   */
  category?: string;
  /**
   * @remarks
   * {"conditionGroups":[[]]}
   */
  conditions?: string;
  extraConditions?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @example
   * public
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      conditions: 'conditions',
      extraConditions: 'extraConditions',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      conditions: 'string',
      extraConditions: 'string',
      maxResults: 'number',
      nextToken: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


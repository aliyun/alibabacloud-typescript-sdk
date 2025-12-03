// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkitemsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Req
   */
  category?: string;
  /**
   * @example
   * {"conditionGroups":[]}
   */
  conditions?: string;
  /**
   * @example
   * {"conditionGroups":[]}
   */
  extraConditions?: string;
  /**
   * @example
   * {"fieldIdentifier":"tag","className":"tag","format":"multiList","value":["c76e0e4bf64801cfad73......"],"operator":"EQUALS"}
   */
  groupCondition?: string;
  /**
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @example
   * {"fieldIdentifier":"status","format":"list","order":"desc","className":"status"}
   */
  orderBy?: string;
  /**
   * @example
   * LIST
   */
  searchType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8fb83debd69a6c7c6626......
   */
  spaceIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Project
   */
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      conditions: 'conditions',
      extraConditions: 'extraConditions',
      groupCondition: 'groupCondition',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      searchType: 'searchType',
      spaceIdentifier: 'spaceIdentifier',
      spaceType: 'spaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      conditions: 'string',
      extraConditions: 'string',
      groupCondition: 'string',
      maxResults: 'string',
      nextToken: 'string',
      orderBy: 'string',
      searchType: 'string',
      spaceIdentifier: 'string',
      spaceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


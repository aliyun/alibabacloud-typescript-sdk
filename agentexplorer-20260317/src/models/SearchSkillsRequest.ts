// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchSkillsRequest extends $dara.Model {
  /**
   * @example
   * compute.serverless,network
   */
  categoryCode?: string;
  /**
   * @example
   * ecs
   */
  keyword?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  skip?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'categoryCode',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      skip: 'skip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


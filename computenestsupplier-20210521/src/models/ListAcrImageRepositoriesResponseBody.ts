// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAcrImageRepositoriesResponseBodyRepositories } from "./ListAcrImageRepositoriesResponseBodyRepositories";


export class ListAcrImageRepositoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
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
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The images.
   */
  repositories?: ListAcrImageRepositoriesResponseBodyRepositories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4A145D8-6F6C-532A-9001-9730CDA27578
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repositories: 'Repositories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      repositories: { 'type': 'array', 'itemType': ListAcrImageRepositoriesResponseBodyRepositories },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.repositories)) {
      $dara.Model.validateArray(this.repositories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


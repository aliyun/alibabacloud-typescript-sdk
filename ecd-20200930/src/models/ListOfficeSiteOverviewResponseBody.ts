// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults } from "./ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults";


export class ListOfficeSiteOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is used to start the next query. If this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network information.
   */
  officeSiteOverviewResults?: ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      officeSiteOverviewResults: 'OfficeSiteOverviewResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      officeSiteOverviewResults: { 'type': 'array', 'itemType': ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSiteOverviewResults)) {
      $dara.Model.validateArray(this.officeSiteOverviewResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


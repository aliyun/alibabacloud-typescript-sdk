// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVSwitchCidrReservationUsageResponseBodyCidrReservationUsages } from "./GetVswitchCidrReservationUsageResponseBodyCidrReservationUsages";


export class GetVSwitchCidrReservationUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of reserved CIDR blocks that are in use.
   */
  cidrReservationUsages?: GetVSwitchCidrReservationUsageResponseBodyCidrReservationUsages[];
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cidrReservationUsages: 'CidrReservationUsages',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrReservationUsages: { 'type': 'array', 'itemType': GetVSwitchCidrReservationUsageResponseBodyCidrReservationUsages },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cidrReservationUsages)) {
      $dara.Model.validateArray(this.cidrReservationUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservations } from "./ListVswitchCidrReservationsResponseBodyVswitchCidrReservations";


export class ListVSwitchCidrReservationsResponseBody extends $dara.Model {
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
  /**
   * @remarks
   * A list of reserved CIDR blocks.
   */
  vSwitchCidrReservations?: ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitchCidrReservations: 'VSwitchCidrReservations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vSwitchCidrReservations: { 'type': 'array', 'itemType': ListVSwitchCidrReservationsResponseBodyVSwitchCidrReservations },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchCidrReservations)) {
      $dara.Model.validateArray(this.vSwitchCidrReservations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


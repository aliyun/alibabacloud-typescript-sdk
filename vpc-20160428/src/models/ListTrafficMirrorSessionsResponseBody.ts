// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessions } from "./ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessions";


export class ListTrafficMirrorSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If a value of **NextToken** is returned, the value is the token that is used for the subsequent query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 739CA01C-92EB-4C69-BCC0-280149C6F41E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @remarks
   * The details about the traffic mirror session.
   */
  trafficMirrorSessions?: ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessions[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficMirrorSessions: 'TrafficMirrorSessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
      trafficMirrorSessions: { 'type': 'array', 'itemType': ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessions },
    };
  }

  validate() {
    if(Array.isArray(this.trafficMirrorSessions)) {
      $dara.Model.validateArray(this.trafficMirrorSessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


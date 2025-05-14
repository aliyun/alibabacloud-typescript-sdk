// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterInspectReportsResponseBodyReports } from "./ListClusterInspectReportsResponseBodyReports";


export class ListClusterInspectReportsResponseBody extends $dara.Model {
  /**
   * @example
   * 405b99e5411f9a4e7148506e45
   */
  nextToken?: string;
  reports?: ListClusterInspectReportsResponseBodyReports[];
  /**
   * @example
   * 49511F2D-D56A-5C24-B9AE-C8491E09B***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      reports: 'reports',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      reports: { 'type': 'array', 'itemType': ListClusterInspectReportsResponseBodyReports },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reports)) {
      $dara.Model.validateArray(this.reports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkPackagesResponseBodyNetworkPackages } from "./DescribeNetworkPackagesResponseBodyNetworkPackages";


export class DescribeNetworkPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The premium bandwidth plans.
   */
  networkPackages?: DescribeNetworkPackagesResponseBodyNetworkPackages[];
  /**
   * @remarks
   * The token that is used to start the next query. If the value of this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackages: 'NetworkPackages',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackages: { 'type': 'array', 'itemType': DescribeNetworkPackagesResponseBodyNetworkPackages },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkPackages)) {
      $dara.Model.validateArray(this.networkPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


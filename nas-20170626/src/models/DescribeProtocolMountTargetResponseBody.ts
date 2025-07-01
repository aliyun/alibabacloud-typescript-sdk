// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProtocolMountTargetResponseBodyProtocolMountTargets } from "./DescribeProtocolMountTargetResponseBodyProtocolMountTargets";


export class DescribeProtocolMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * aBcdeg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The export directories of the protocol service.
   */
  protocolMountTargets?: DescribeProtocolMountTargetResponseBodyProtocolMountTargets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      protocolMountTargets: 'ProtocolMountTargets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      protocolMountTargets: { 'type': 'array', 'itemType': DescribeProtocolMountTargetResponseBodyProtocolMountTargets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protocolMountTargets)) {
      $dara.Model.validateArray(this.protocolMountTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


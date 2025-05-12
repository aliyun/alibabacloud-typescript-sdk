// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDesktopsInGroupResponseBodyPaidDesktops } from "./DescribeDesktopsInGroupResponseBodyPaidDesktops";
import { DescribeDesktopsInGroupResponseBodyPostPaidDesktops } from "./DescribeDesktopsInGroupResponseBodyPostPaidDesktops";


export class DescribeDesktopsInGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of subscription cloud computers that are in the Connected state.
   * 
   * @example
   * 100
   */
  onlinePrePaidDesktopsCount?: number;
  /**
   * @remarks
   * The subscription cloud computers.
   */
  paidDesktops?: DescribeDesktopsInGroupResponseBodyPaidDesktops[];
  /**
   * @remarks
   * The total number of subscription cloud computers.
   * 
   * @example
   * 10
   */
  paidDesktopsCount?: number;
  /**
   * @remarks
   * The pay-as-you-go cloud computers.
   */
  postPaidDesktops?: DescribeDesktopsInGroupResponseBodyPostPaidDesktops[];
  /**
   * @remarks
   * The total number of pay-as-you-go cloud computers.
   * 
   * @example
   * 10
   */
  postPaidDesktopsCount?: number;
  /**
   * @remarks
   * The total amount of bills for pay-as-you-go cloud computers.
   * 
   * @example
   * 10000
   */
  postPaidDesktopsTotalAmount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of subscription cloud computers that are in the Running state.
   * 
   * @example
   * 100
   */
  runningPrePaidDesktopsCount?: number;
  /**
   * @remarks
   * The number of subscription cloud computers that are in the Stopped state.
   * 
   * @example
   * 100
   */
  stopedPrePaidDesktopsCount?: number;
  /**
   * @remarks
   * The number of subscription cloud computers that are in the Stopped state.
   * 
   * @example
   * 100
   */
  stoppedPrePaidDesktopsCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      onlinePrePaidDesktopsCount: 'OnlinePrePaidDesktopsCount',
      paidDesktops: 'PaidDesktops',
      paidDesktopsCount: 'PaidDesktopsCount',
      postPaidDesktops: 'PostPaidDesktops',
      postPaidDesktopsCount: 'PostPaidDesktopsCount',
      postPaidDesktopsTotalAmount: 'PostPaidDesktopsTotalAmount',
      requestId: 'RequestId',
      runningPrePaidDesktopsCount: 'RunningPrePaidDesktopsCount',
      stopedPrePaidDesktopsCount: 'StopedPrePaidDesktopsCount',
      stoppedPrePaidDesktopsCount: 'StoppedPrePaidDesktopsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      onlinePrePaidDesktopsCount: 'number',
      paidDesktops: { 'type': 'array', 'itemType': DescribeDesktopsInGroupResponseBodyPaidDesktops },
      paidDesktopsCount: 'number',
      postPaidDesktops: { 'type': 'array', 'itemType': DescribeDesktopsInGroupResponseBodyPostPaidDesktops },
      postPaidDesktopsCount: 'number',
      postPaidDesktopsTotalAmount: 'number',
      requestId: 'string',
      runningPrePaidDesktopsCount: 'number',
      stopedPrePaidDesktopsCount: 'number',
      stoppedPrePaidDesktopsCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.paidDesktops)) {
      $dara.Model.validateArray(this.paidDesktops);
    }
    if(Array.isArray(this.postPaidDesktops)) {
      $dara.Model.validateArray(this.postPaidDesktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


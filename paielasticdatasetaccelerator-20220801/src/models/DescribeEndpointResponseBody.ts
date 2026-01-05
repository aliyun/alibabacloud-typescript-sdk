// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EndpointStatus } from "./EndpointStatus";


export class DescribeEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * 2014-10-02T15:01:23Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2014-10-02T15:01:23Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * endpoint-1
   */
  name?: string;
  /**
   * @example
   * 1557702098194904
   */
  ownerId?: string;
  /**
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  status?: EndpointStatus;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @example
   * 276065346797410278
   */
  userId?: string;
  /**
   * @example
   * end-ivrq92qhbyrg4jctih
   */
  uuid?: string;
  /**
   * @example
   * vpc-j6co2fcdsl1q0gnuc3ym3
   */
  vpcId?: string;
  /**
   * @example
   * vsw-j6cmr00qjyrft6jo2mg7g
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
      userId: 'UserId',
      uuid: 'Uuid',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      ownerId: 'string',
      requestId: 'string',
      status: EndpointStatus,
      type: 'string',
      userId: 'string',
      uuid: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


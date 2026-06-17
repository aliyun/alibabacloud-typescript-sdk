// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventListResponseBodyEventList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the affected asset.
   * 
   * @example
   * i-ECS****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The name of the affected asset.
   * 
   * @example
   * ECS_test
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The type of the affected asset. Valid values:
   * 
   * - **BastionHostIP**: the egress IP address of a bastion host.
   * 
   * - **BastionHostIngressIP**: the ingress IP address of a bastion host.
   * 
   * - **EcsEIP**: the EIP of an ECS instance.
   * 
   * - **EcsPublicIP**: the public IP address of an ECS instance.
   * 
   * - **EIP**: an EIP.
   * 
   * - **EniEIP**: the EIP of an ENI.
   * 
   * - **NatEIP**: the EIP of a NAT gateway.
   * 
   * - **SlbEIP**: the EIP of a CLB instance.
   * 
   * - **SlbPublicIP**: the public IP address of a CLB instance.
   * 
   * - **NatPublicIP**: the public IP address of a NAT gateway.
   * 
   * - **HAVIP**: an HAVIP.
   * 
   * @example
   * EcsPublicIp
   */
  assetsType?: string;
  /**
   * @remarks
   * The ID of the breach detection event.
   * 
   * @example
   * 69d189e2-ec17-4676-a2fe-02969234****
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the breach detection event.
   * 
   * @example
   * event_test
   */
  eventName?: string;
  /**
   * @remarks
   * The source of the breach detection event. Valid values:
   * 
   * - **IPS**: an intrusion prevention system event.
   * 
   * - **offline**: an offline event.
   * 
   * @example
   * IPS
   */
  eventSrc?: string;
  /**
   * @remarks
   * The UUID of the breach detection event.
   * 
   * @example
   * fadd-dfdd-****
   */
  eventUuid?: string;
  /**
   * @remarks
   * The time when the breach detection event first occurred. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656750960
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether the breach detection event is ignored. Valid values:
   * 
   * - **true**: The event is ignored.
   * 
   * - **false**: The event is not ignored.
   * 
   * @example
   * true
   */
  isIgnore?: boolean;
  /**
   * @remarks
   * The time when the breach detection event last occurred. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656837360
   */
  lastTime?: number;
  /**
   * @remarks
   * The UID of the member.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The private IP address of the affected asset.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIP?: string;
  /**
   * @remarks
   * The handling status of the breach detection event. Valid values:
   * 
   * - **0**: pending
   * 
   * - **20**: handled
   * 
   * @example
   * 20
   */
  processStatus?: number;
  /**
   * @remarks
   * The public IP address of the affected asset.
   * 
   * @example
   * 198.51.XX.XX
   */
  publicIP?: string;
  /**
   * @remarks
   * The type of the affected asset. Valid values:
   * 
   * - **BastionHostIP**: the egress IP address of a bastion host.
   * 
   * - **BastionHostIngressIP**: the ingress IP address of a bastion host.
   * 
   * - **EcsEIP**: the EIP of an ECS instance.
   * 
   * - **EcsPublicIP**: the public IP address of an ECS instance.
   * 
   * - **EIP**: an EIP.
   * 
   * - **EniEIP**: the EIP of an ENI.
   * 
   * - **NatEIP**: the EIP of a NAT gateway.
   * 
   * - **SlbEIP**: the EIP of a CLB instance.
   * 
   * - **SlbPublicIP**: the public IP address of a CLB instance.
   * 
   * - **NatPublicIP**: the public IP address of a NAT gateway.
   * 
   * - **HAVIP**: an HAVIP.
   * 
   * @example
   * EcsPublicIp
   */
  publicIpType?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **1**: low
   * 
   * - **2**: medium
   * 
   * - **3**: high
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      assetsInstanceName: 'AssetsInstanceName',
      assetsType: 'AssetsType',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventSrc: 'EventSrc',
      eventUuid: 'EventUuid',
      firstTime: 'FirstTime',
      isIgnore: 'IsIgnore',
      lastTime: 'LastTime',
      memberUid: 'MemberUid',
      privateIP: 'PrivateIP',
      processStatus: 'ProcessStatus',
      publicIP: 'PublicIP',
      publicIpType: 'PublicIpType',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      assetsInstanceName: 'string',
      assetsType: 'string',
      eventKey: 'string',
      eventName: 'string',
      eventSrc: 'string',
      eventUuid: 'string',
      firstTime: 'number',
      isIgnore: 'boolean',
      lastTime: 'number',
      memberUid: 'string',
      privateIP: 'string',
      processStatus: 'number',
      publicIP: 'string',
      publicIpType: 'string',
      riskLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of breach detection events.
   * 
   * @example
   * 40
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of breach detection events.
   */
  eventList?: DescribeInvadeEventListResponseBodyEventList[];
  /**
   * @remarks
   * The percentage of high-risk events.
   * 
   * @example
   * 40
   */
  highLevelPercent?: number;
  /**
   * @remarks
   * The percentage of low-risk events.
   * 
   * @example
   * 20
   */
  lowLevelPercent?: number;
  /**
   * @remarks
   * The percentage of medium-risk events.
   * 
   * @example
   * 40
   */
  middleLevelPercent?: number;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInvadeEventListResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      highLevelPercent: 'HighLevelPercent',
      lowLevelPercent: 'LowLevelPercent',
      middleLevelPercent: 'MiddleLevelPercent',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeInvadeEventListResponseBodyEventList },
      highLevelPercent: 'number',
      lowLevelPercent: 'number',
      middleLevelPercent: 'number',
      pageInfo: DescribeInvadeEventListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


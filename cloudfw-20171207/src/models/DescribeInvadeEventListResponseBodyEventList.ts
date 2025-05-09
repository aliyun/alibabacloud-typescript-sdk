// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventListResponseBodyEventList extends $dara.Model {
  /**
   * @remarks
   * The ID of the affected asset.
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
   * *   **BastionHostIP**: the egress IP address of a bastion host
   * *   **BastionHostIngressIP**: the ingress IP address of a bastion host
   * *   **EcsEIP**: the elastic IP address (EIP) of an Elastic Compute Service (ECS) instance
   * *   **EcsPublicIP**: the public IP address of an ECS instance
   * *   **EIP**: the EIP
   * *   **EniEIP**: the EIP of an elastic network interface (ENI)
   * *   **NatEIP**: the EIP of a NAT gateway
   * *   **SlbEIP**: the EIP of a Server Load Balancer (SLB) instance
   * *   **SlbPublicIP**: the public IP address of an SLB instance
   * *   **NatPublicIP**: the public IP address of a NAT gateway
   * *   **HAVIP**: the high-availability virtual IP address (HAVIP)
   * 
   * @example
   * EcsPublicIp
   */
  assetsType?: string;
  /**
   * @remarks
   * The ID of the breach awareness event.
   * 
   * @example
   * 69d189e2-ec17-4676-a2fe-02969234****
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the breach awareness event.
   * 
   * @example
   * event_test
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the breach awareness event. Valid values:
   * 
   * *   **IPS**: intrusion prevention event
   * *   **offline**: disconnection event
   * 
   * @example
   * IPS
   */
  eventSrc?: string;
  /**
   * @remarks
   * The UUID of the breach awareness event.
   * 
   * @example
   * fadd-dfdd-****
   */
  eventUuid?: string;
  /**
   * @remarks
   * The time when the breach awareness event first occurred. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656750960
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether the breach awareness event is ignored. Valid values:
   * 
   * *   **true**: The breach awareness event is ignored.
   * *   **false**: The breach awareness event is not ignored.
   * 
   * @example
   * true
   */
  isIgnore?: boolean;
  /**
   * @remarks
   * The time when the breach awareness event last occurred. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656837360
   */
  lastTime?: number;
  /**
   * @remarks
   * The ID of the member.
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
   * The handling status of the breach awareness event. Valid values:
   * 
   * *   **0**: unhandled
   * *   **20**: handled
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
   * *   **BastionHostIP**: the egress IP address of a bastion host
   * *   **BastionHostIngressIP**: the ingress IP address of a bastion host
   * *   **EcsEIP**: the EIP of an ECS instance
   * *   **EcsPublicIP**: the public IP address of an ECS instance
   * *   **EIP**: the EIP
   * *   **EniEIP**: the EIP of an ENI
   * *   **NatEIP**: the EIP of a NAT gateway
   * *   **SlbEIP**: the EIP of an SLB instance
   * *   **SlbPublicIP**: the public IP address of an SLB instance
   * *   **NatPublicIP**: the public IP address of a NAT gateway
   * *   **HAVIP**: the HAVIP
   * 
   * @example
   * EcsPublicIp
   */
  publicIpType?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
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


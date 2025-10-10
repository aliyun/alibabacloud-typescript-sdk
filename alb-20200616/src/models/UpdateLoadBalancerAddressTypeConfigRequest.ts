// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerAddressTypeConfigRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic IP address (EIP). You can specify a maximum of 10 zones.
   * 
   * >  This parameter is required if you want to change the network type from internal-facing to Internet-facing.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of the EIP. Valid values:
   * 
   * *   Common (default): indicates an EIP
   * *   Anycast: indicates an Anycast EIP
   * 
   * >  For more information about the regions in which ALB supports Anycast EIPs, see [Limits](https://help.aliyun.com/document_detail/460727.html).
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone of an ALB instance. You can specify a maximum of 10 zones. If the selected region supports two or more zones, select at least two zones to ensure the high availability of your service.
   * 
   * @example
   * vsw-bp10ttov87felojcn****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the ALB instance. You can specify a maximum of 10 zones. If the selected region supports two or more zones, select at least two zones to ensure the high availability of your service.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/189196.html) operation to query the information about the zone.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eipType: 'EipType',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipType: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAddressTypeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The new network type. Valid values:
   * 
   * *   **Internet**: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
   * *   **Intranet**: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. In this case, the ALB instance can be accessed over the virtual private cloud (VPC) where the ALB instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The ALB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1o94dp5i6ea****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The zones and the vSwitches in the zones. You can specify a maximum of 10 zones. If the selected region supports two or more zones, select at least two zones to ensure the high availability of your service.
   */
  zoneMappings?: UpdateLoadBalancerAddressTypeConfigRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      clientToken: 'string',
      dryRun: 'string',
      loadBalancerId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': UpdateLoadBalancerAddressTypeConfigRequestZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.zoneMappings)) {
      $dara.Model.validateArray(this.zoneMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


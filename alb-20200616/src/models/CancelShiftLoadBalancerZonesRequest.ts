// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelShiftLoadBalancerZonesRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch that corresponds to the zone. By default, each zone uses one vSwitch and one subnet.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1rmcrwg3erh1fh8****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID. You can obtain the zone ID by calling the [DescribeZones](https://help.aliyun.com/document_detail/189196.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CancelShiftLoadBalancerZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client. Make sure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without adding the zone back. The system checks whether required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The application load balancing instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-o9ulmq5hgn68jk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The zone and vSwitch mappings.
   * 
   * > You can add back only one zone in each call.
   * 
   * This parameter is required.
   */
  zoneMappings?: CancelShiftLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': CancelShiftLoadBalancerZonesRequestZoneMappings },
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


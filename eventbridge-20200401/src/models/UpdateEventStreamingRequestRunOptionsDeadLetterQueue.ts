// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestRunOptionsDeadLetterQueue extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the dead-letter queue.
   * 
   * @example
   * acs:ram::1317334647812936:role/rdstoecsassumekms
   */
  arn?: string;
  /**
   * @remarks
   * The network type of the dead-letter queue. Valid values:
   * 
   * *   PrivateNetwork
   * *   PublicNetwork
   * 
   * @example
   * PrivateNetwork
   */
  network?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-2vcgdxz7o1n9zapp****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zehizpoendb3****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      network: 'Network',
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      network: 'string',
      securityGroupId: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


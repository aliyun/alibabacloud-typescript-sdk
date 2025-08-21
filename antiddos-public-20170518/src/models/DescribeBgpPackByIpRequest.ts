// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBgpPackByIpRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the asset to query.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The IP address of the asset to query.
   * 
   * >  You can call the [DescribeInstanceIpAddress](https://help.aliyun.com/document_detail/472620.html) operation to query the IDs of Elastic Compute Service (ECS) instances, Server Load Balancer (SLB) instances, and elastic IP addresses (EIPs) within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 118.31.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


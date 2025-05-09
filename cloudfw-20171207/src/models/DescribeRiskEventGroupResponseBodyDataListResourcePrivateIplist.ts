// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to which the private IP address belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the instance that uses the private IP address.
   * 
   * @example
   * i-wz92jf4scg2zb74p****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The name of the instance that uses the private IP address.
   * 
   * @example
   * LD-shenzhen-zy****
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.255.XX.XX
   */
  resourcePrivateIP?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourcePrivateIP: 'ResourcePrivateIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourcePrivateIP: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


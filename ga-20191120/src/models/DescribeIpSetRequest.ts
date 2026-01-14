// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * You can call the [ListIpSets](https://help.aliyun.com/document_detail/2253273.html) operation to query the IDs of acceleration regions of a specific GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ips-bp11ilwqjdkjeg9r7****
   */
  ipSetId?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipSetId: 'IpSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSetId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcEndpointAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint whose attributes you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the endpoint whose attributes you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
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


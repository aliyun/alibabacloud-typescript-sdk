// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcEndpointServiceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsKeepAliveRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-885351****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      officeSiteId: 'string',
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


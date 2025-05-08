// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecondaryPublicIpAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-hangzhou-44
   */
  ensRegionId?: string;
  ensRegionIds?: string[];
  /**
   * @remarks
   * The Internet service provider. Valid values:
   * 
   * *   cmcc: China Mobile.
   * *   unicom: China Unicom.
   * *   telecom: China Telecom.
   * 
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The secondary IP address.
   * 
   * @example
   * 12.XXX.XXX.4
   */
  secondaryPublicIpAddress?: string;
  /**
   * @remarks
   * The ID of the secondary public IP address.
   * 
   * @example
   * spi-5wys0pio93c9f9ukzj2f2fwyr
   */
  secondaryPublicIpId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      isp: 'Isp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      secondaryPublicIpAddress: 'SecondaryPublicIpAddress',
      secondaryPublicIpId: 'SecondaryPublicIpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      isp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      secondaryPublicIpAddress: 'string',
      secondaryPublicIpId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


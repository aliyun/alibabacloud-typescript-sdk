// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecondaryPublicIpAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENS edge zone.
   * 
   * @example
   * cn-hangzhou-44
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The array of ENS edge zone IDs. Array length: 1 to 100.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The Internet service provider (ISP). Valid values:
   * - cmcc: China Mobile.
   * - unicom: China Unicom.
   * - telecom: China Telecom.
   * 
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging queries. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The secondary public IP address.
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


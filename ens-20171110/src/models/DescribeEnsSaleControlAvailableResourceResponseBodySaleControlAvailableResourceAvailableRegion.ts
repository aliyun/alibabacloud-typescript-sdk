// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableRegion extends $dara.Model {
  area?: string;
  city?: string;
  country?: string;
  ensRegionId?: string;
  ensRegionName?: string;
  isp?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      city: 'City',
      country: 'Country',
      ensRegionId: 'EnsRegionId',
      ensRegionName: 'EnsRegionName',
      isp: 'Isp',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      city: 'string',
      country: 'string',
      ensRegionId: 'string',
      ensRegionName: 'string',
      isp: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


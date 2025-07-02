// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceSeatsRequest extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  serialNo?: string;
  serialNoList?: string[];
  siteId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serialNo: 'SerialNo',
      serialNoList: 'SerialNoList',
      siteId: 'SiteId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      serialNo: 'string',
      serialNoList: { 'type': 'array', 'itemType': 'string' },
      siteId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serialNoList)) {
      $dara.Model.validateArray(this.serialNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


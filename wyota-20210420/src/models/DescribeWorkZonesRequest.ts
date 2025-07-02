// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkZonesRequest extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  tenantId?: string;
  zoneIdList?: string[];
  zoneNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      zoneIdList: 'ZoneIdList',
      zoneNameList: 'ZoneNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'string',
      zoneIdList: { 'type': 'array', 'itemType': 'string' },
      zoneNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.zoneIdList)) {
      $dara.Model.validateArray(this.zoneIdList);
    }
    if(Array.isArray(this.zoneNameList)) {
      $dara.Model.validateArray(this.zoneNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


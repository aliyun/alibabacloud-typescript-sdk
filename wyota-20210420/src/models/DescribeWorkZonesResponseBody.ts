// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkZonesResponseBodyDataWorkZoneDTOList extends $dara.Model {
  seatCol?: number;
  seatRow?: number;
  tenantId?: string;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      seatCol: 'SeatCol',
      seatRow: 'SeatRow',
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seatCol: 'number',
      seatRow: 'number',
      tenantId: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkZonesResponseBodyData extends $dara.Model {
  totalCount?: number;
  workZoneDTOList?: DescribeWorkZonesResponseBodyDataWorkZoneDTOList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      workZoneDTOList: 'WorkZoneDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      workZoneDTOList: { 'type': 'array', 'itemType': DescribeWorkZonesResponseBodyDataWorkZoneDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.workZoneDTOList)) {
      $dara.Model.validateArray(this.workZoneDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkZonesResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeWorkZonesResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeWorkZonesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


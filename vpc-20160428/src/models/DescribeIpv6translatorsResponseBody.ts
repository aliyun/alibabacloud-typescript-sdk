// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6TranslatorIpv6TranslatorEntryIds extends $dara.Model {
  ipv6TranslatorEntryId?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorEntryId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6TranslatorEntryId)) {
      $dara.Model.validateArray(this.ipv6TranslatorEntryId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6Translator extends $dara.Model {
  allocateIpv4Addr?: string;
  allocateIpv6Addr?: string;
  availableBandwidth?: string;
  bandwidth?: number;
  businessStatus?: string;
  createTime?: number;
  description?: string;
  endTime?: number;
  ipv6TranslatorEntryIds?: DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6TranslatorIpv6TranslatorEntryIds;
  ipv6TranslatorId?: string;
  name?: string;
  payType?: string;
  regionId?: string;
  spec?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      allocateIpv4Addr: 'AllocateIpv4Addr',
      allocateIpv6Addr: 'AllocateIpv6Addr',
      availableBandwidth: 'AvailableBandwidth',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      description: 'Description',
      endTime: 'EndTime',
      ipv6TranslatorEntryIds: 'Ipv6TranslatorEntryIds',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      name: 'Name',
      payType: 'PayType',
      regionId: 'RegionId',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateIpv4Addr: 'string',
      allocateIpv6Addr: 'string',
      availableBandwidth: 'string',
      bandwidth: 'number',
      businessStatus: 'string',
      createTime: 'number',
      description: 'string',
      endTime: 'number',
      ipv6TranslatorEntryIds: DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6TranslatorIpv6TranslatorEntryIds,
      ipv6TranslatorId: 'string',
      name: 'string',
      payType: 'string',
      regionId: 'string',
      spec: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.ipv6TranslatorEntryIds && typeof (this.ipv6TranslatorEntryIds as any).validate === 'function') {
      (this.ipv6TranslatorEntryIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorsResponseBodyIpv6Translators extends $dara.Model {
  ipv6Translator?: DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6Translator[];
  static names(): { [key: string]: string } {
    return {
      ipv6Translator: 'Ipv6Translator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Translator: { 'type': 'array', 'itemType': DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6Translator },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Translator)) {
      $dara.Model.validateArray(this.ipv6Translator);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorsResponseBody extends $dara.Model {
  ipv6Translators?: DescribeIPv6TranslatorsResponseBodyIpv6Translators;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipv6Translators: 'Ipv6Translators',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Translators: DescribeIPv6TranslatorsResponseBodyIpv6Translators,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipv6Translators && typeof (this.ipv6Translators as any).validate === 'function') {
      (this.ipv6Translators as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


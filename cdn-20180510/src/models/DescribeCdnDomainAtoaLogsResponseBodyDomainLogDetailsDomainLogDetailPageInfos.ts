// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $dara.Model {
  pageIndex?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


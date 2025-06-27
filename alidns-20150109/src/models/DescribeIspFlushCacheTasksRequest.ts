// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIspFlushCacheTasksRequest extends $dara.Model {
  direction?: string;
  domainName?: string;
  instanceId?: string;
  isp?: string;
  lang?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      isp: 'Isp',
      lang: 'Lang',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainName: 'string',
      instanceId: 'string',
      isp: 'string',
      lang: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


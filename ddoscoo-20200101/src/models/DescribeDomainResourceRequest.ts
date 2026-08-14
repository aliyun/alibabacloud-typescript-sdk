// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainResourceRequest extends $dara.Model {
  domain?: string;
  instanceIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  queryDomainPattern?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDomainPattern: 'QueryDomainPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      queryDomainPattern: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


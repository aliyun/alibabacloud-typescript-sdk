// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebRulesRequest extends $dara.Model {
  cname?: string;
  domain?: string;
  instanceIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  queryDomainPattern?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDomainPattern: 'QueryDomainPattern',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      queryDomainPattern: 'string',
      resourceGroupId: 'string',
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


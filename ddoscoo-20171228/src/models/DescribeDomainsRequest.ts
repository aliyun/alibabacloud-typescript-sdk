// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsRequest extends $dara.Model {
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * ddoscoo-cn-XXXXXX
   */
  instanceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * fuzzy
   */
  queryDomainPattern?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      offset: 'Offset',
      pageSize: 'PageSize',
      queryDomainPattern: 'QueryDomainPattern',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      offset: 'number',
      pageSize: 'string',
      queryDomainPattern: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
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


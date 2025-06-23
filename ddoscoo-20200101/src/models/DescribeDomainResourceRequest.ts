// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website that you want to query.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * An array that consists of the IDs of instances to query.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The match mode. Valid values:
   * 
   * *   **fuzzy**: fuzzy match. This is the default value.
   * *   **exact**: exact match.
   * 
   * @example
   * fuzzy
   */
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


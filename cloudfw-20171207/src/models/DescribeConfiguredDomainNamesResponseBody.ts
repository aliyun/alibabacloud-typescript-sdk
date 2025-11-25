// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfiguredDomainNamesResponseBodyDomainNames extends $dara.Model {
  /**
   * @example
   * test
   */
  comment?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 0
   */
  isMalicious?: boolean;
  /**
   * @example
   * 1534408189
   */
  operationTime?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      domainName: 'DomainName',
      isMalicious: 'IsMalicious',
      operationTime: 'OperationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      domainName: 'string',
      isMalicious: 'boolean',
      operationTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfiguredDomainNamesResponseBody extends $dara.Model {
  domainNames?: DescribeConfiguredDomainNamesResponseBodyDomainNames[];
  /**
   * @example
   * sg_server
   */
  module?: string;
  /**
   * @example
   * 09A2D6F1-EA1B-56D9-977D-74878405****
   */
  requestId?: string;
  /**
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      module: 'Module',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': DescribeConfiguredDomainNamesResponseBodyDomainNames },
      module: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainNames)) {
      $dara.Model.validateArray(this.domainNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


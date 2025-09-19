// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAttestorsResponseBodyAttestors extends $dara.Model {
  /**
   * @remarks
   * The ID of the KMS key.
   * 
   * @example
   * 2e81355b-f8e7-4090-8082-a8f8124a****
   */
  keyId?: string;
  /**
   * @remarks
   * The region ID of the KMS key.
   * 
   * @example
   * cn-hangzhou
   */
  keyRegionId?: string;
  /**
   * @remarks
   * The version ID of the Key Management Service (KMS) key.
   * 
   * @example
   * 8d7c9c91-57ce-4cf4-a959-1e700e13****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The name of the witness.
   * 
   * @example
   * attestor-123
   */
  name?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * attestor
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyRegionId: 'KeyRegionId',
      keyVersionId: 'KeyVersionId',
      name: 'Name',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyRegionId: 'string',
      keyVersionId: 'string',
      name: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttestorsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 122
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttestorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The witnesses.
   */
  attestors?: DescribeAttestorsResponseBodyAttestors[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeAttestorsResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BC55C8F-226E-5AF5-9A2C-2EC43864****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attestors: 'Attestors',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attestors: { 'type': 'array', 'itemType': DescribeAttestorsResponseBodyAttestors },
      pageInfo: DescribeAttestorsResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attestors)) {
      $dara.Model.validateArray(this.attestors);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


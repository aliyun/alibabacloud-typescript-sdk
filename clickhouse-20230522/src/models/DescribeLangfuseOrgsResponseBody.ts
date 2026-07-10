// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseOrgsResponseBodyDataOrganizations extends $dara.Model {
  /**
   * @example
   * 2026-06-11T10:27:23Z
   */
  createdAt?: string;
  /**
   * @example
   * org_name
   */
  name?: string;
  /**
   * @example
   * cmrbhzx930005jw2q****
   */
  organizationId?: string;
  /**
   * @example
   * 2026-06-09T10:27:55
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      name: 'Name',
      organizationId: 'OrganizationId',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      name: 'string',
      organizationId: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseOrgsResponseBodyData extends $dara.Model {
  organizations?: DescribeLangfuseOrgsResponseBodyDataOrganizations[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 17
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      organizations: 'Organizations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizations: { 'type': 'array', 'itemType': DescribeLangfuseOrgsResponseBodyDataOrganizations },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.organizations)) {
      $dara.Model.validateArray(this.organizations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseOrgsResponseBody extends $dara.Model {
  data?: DescribeLangfuseOrgsResponseBodyData;
  /**
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeLangfuseOrgsResponseBodyData,
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


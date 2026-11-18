// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseOrgsResponseBodyDataOrganizations extends $dara.Model {
  /**
   * @remarks
   * The time when the Langfuse organization was created. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2026-06-11T10:27:23Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The name of the Langfuse organization.
   * 
   * @example
   * org_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Langfuse organization.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  organizationId?: string;
  /**
   * @remarks
   * The time when the Langfuse organization was updated. The time follows the YYYY-MM-DDTHH:mm:ss format.
   * 
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
  /**
   * @remarks
   * The Langfuse organizations.
   */
  organizations?: DescribeLangfuseOrgsResponseBodyDataOrganizations[];
  /**
   * @remarks
   * The current page number.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeLangfuseOrgsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
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


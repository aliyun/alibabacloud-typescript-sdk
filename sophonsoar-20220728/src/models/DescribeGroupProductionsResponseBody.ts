// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupProductionsResponseBodyDataProductionsPolicyList extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM policy.
   * 
   * @example
   * AliyunRAMReadOnlyAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the RAM policy. Valid values:
   * 
   * *   **All**: permissions.
   * *   **Read-only**: permissions.
   * 
   * @example
   * All
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupProductionsResponseBodyDataProductions extends $dara.Model {
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * DM
   */
  code?: string;
  /**
   * @remarks
   * The default requested domain name.
   * 
   * @example
   * dm.aliyuncs.com
   */
  defaultDomain?: string;
  /**
   * @remarks
   * The default version.
   * 
   * @example
   * 2014-08-15
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the cloud service.
   * 
   * @example
   * DM
   */
  description?: string;
  /**
   * @remarks
   * The requested domain names.
   */
  fullDomains?: string[];
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * Cloud Communication
   */
  group?: string;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * DirectMail
   */
  name?: string;
  /**
   * @remarks
   * The RAM policies of the cloud service.
   */
  policyList?: DescribeGroupProductionsResponseBodyDataProductionsPolicyList[];
  /**
   * @remarks
   * The Resource Access Management (RAM) code of the POP to which the resource belongs.
   * 
   * @example
   * dm
   */
  ramCode?: string;
  /**
   * @remarks
   * The short name of the cloud service.
   * 
   * @example
   * DM
   */
  shortName?: string;
  /**
   * @remarks
   * The information source of the cloud service.
   * 
   * @example
   * next
   */
  source?: string;
  /**
   * @remarks
   * The API versions.
   */
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      defaultDomain: 'DefaultDomain',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      fullDomains: 'FullDomains',
      group: 'Group',
      name: 'Name',
      policyList: 'PolicyList',
      ramCode: 'RamCode',
      shortName: 'ShortName',
      source: 'Source',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      defaultDomain: 'string',
      defaultVersion: 'string',
      description: 'string',
      fullDomains: { 'type': 'array', 'itemType': 'string' },
      group: 'string',
      name: 'string',
      policyList: { 'type': 'array', 'itemType': DescribeGroupProductionsResponseBodyDataProductionsPolicyList },
      ramCode: 'string',
      shortName: 'string',
      source: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fullDomains)) {
      $dara.Model.validateArray(this.fullDomains);
    }
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupProductionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * Cloud Communication
   */
  groupName?: string;
  /**
   * @remarks
   * The information about the cloud services.
   */
  productions?: DescribeGroupProductionsResponseBodyDataProductions[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      productions: 'Productions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      productions: { 'type': 'array', 'itemType': DescribeGroupProductionsResponseBodyDataProductions },
    };
  }

  validate() {
    if(Array.isArray(this.productions)) {
      $dara.Model.validateArray(this.productions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupProductionsResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
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
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
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

export class DescribeGroupProductionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the groups.
   */
  data?: DescribeGroupProductionsResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeGroupProductionsResponseBodyPage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 358E012F-****-599D-9ED0-****61CDE615
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeGroupProductionsResponseBodyData },
      page: DescribeGroupProductionsResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


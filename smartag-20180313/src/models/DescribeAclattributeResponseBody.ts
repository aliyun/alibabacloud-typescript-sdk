// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLAttributeResponseBodyAcrsAcrDpiGroupIds extends $dara.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dpiGroupId)) {
      $dara.Model.validateArray(this.dpiGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrsAcrDpiSignatureIds extends $dara.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dpiSignatureId)) {
      $dara.Model.validateArray(this.dpiSignatureId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrsAcr extends $dara.Model {
  aclId?: string;
  aclType?: string;
  acrId?: string;
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  direction?: string;
  dpiGroupIds?: DescribeACLAttributeResponseBodyAcrsAcrDpiGroupIds;
  dpiSignatureIds?: DescribeACLAttributeResponseBodyAcrsAcrDpiSignatureIds;
  gmtCreate?: number;
  ipProtocol?: string;
  name?: string;
  policy?: string;
  priority?: number;
  sourceCidr?: string;
  sourcePortRange?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclType: 'AclType',
      acrId: 'AcrId',
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      direction: 'Direction',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      gmtCreate: 'GmtCreate',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      policy: 'Policy',
      priority: 'Priority',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclType: 'string',
      acrId: 'string',
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      direction: 'string',
      dpiGroupIds: DescribeACLAttributeResponseBodyAcrsAcrDpiGroupIds,
      dpiSignatureIds: DescribeACLAttributeResponseBodyAcrsAcrDpiSignatureIds,
      gmtCreate: 'number',
      ipProtocol: 'string',
      name: 'string',
      policy: 'string',
      priority: 'number',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.dpiGroupIds && typeof (this.dpiGroupIds as any).validate === 'function') {
      (this.dpiGroupIds as any).validate();
    }
    if(this.dpiSignatureIds && typeof (this.dpiSignatureIds as any).validate === 'function') {
      (this.dpiSignatureIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrs extends $dara.Model {
  acr?: DescribeACLAttributeResponseBodyAcrsAcr[];
  static names(): { [key: string]: string } {
    return {
      acr: 'Acr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acr: { 'type': 'array', 'itemType': DescribeACLAttributeResponseBodyAcrsAcr },
    };
  }

  validate() {
    if(Array.isArray(this.acr)) {
      $dara.Model.validateArray(this.acr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBody extends $dara.Model {
  acrs?: DescribeACLAttributeResponseBodyAcrs;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F62CE77-FBA2-4F8D-AED9-0A02814EDA69
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acrs: 'Acrs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrs: DescribeACLAttributeResponseBodyAcrs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.acrs && typeof (this.acrs as any).validate === 'function') {
      (this.acrs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResponseBodyUserExternalInfo extends $dara.Model {
  /**
   * @example
   * oijjnabsf****
   */
  externalId?: string;
  /**
   * @example
   * Alex
   */
  externalName?: string;
  /**
   * @example
   * 15412***
   */
  jobNumber?: string;
  /**
   * @example
   * OIDC
   */
  ssoType?: string;
  static names(): { [key: string]: string } {
    return {
      externalId: 'ExternalId',
      externalName: 'ExternalName',
      jobNumber: 'JobNumber',
      ssoType: 'SsoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalId: 'string',
      externalName: 'string',
      jobNumber: 'string',
      ssoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserResponseBodyUserProperties extends $dara.Model {
  /**
   * @example
   * role
   */
  key?: string;
  /**
   * @example
   * teacher
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserResponseBodyUser extends $dara.Model {
  /**
   * @example
   * alex@test-email.com
   */
  email?: string;
  /**
   * @example
   * alex
   */
  endUserId?: string;
  externalInfo?: DescribeUserResponseBodyUserExternalInfo;
  extras?: { [key: string]: string };
  /**
   * @example
   * 2025-01-01 12:00:00
   */
  gmtCreate?: number;
  nickName?: string;
  orgIds?: string[];
  orgPaths?: string[];
  /**
   * @example
   * 1888888****
   */
  phone?: string;
  properties?: DescribeUserResponseBodyUserProperties[];
  /**
   * @example
   * remark
   */
  remark?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * aisdfumj****
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      externalInfo: 'ExternalInfo',
      extras: 'Extras',
      gmtCreate: 'GmtCreate',
      nickName: 'NickName',
      orgIds: 'OrgIds',
      orgPaths: 'OrgPaths',
      phone: 'Phone',
      properties: 'Properties',
      remark: 'Remark',
      status: 'Status',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      externalInfo: DescribeUserResponseBodyUserExternalInfo,
      extras: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreate: 'number',
      nickName: 'string',
      orgIds: { 'type': 'array', 'itemType': 'string' },
      orgPaths: { 'type': 'array', 'itemType': 'string' },
      phone: 'string',
      properties: { 'type': 'array', 'itemType': DescribeUserResponseBodyUserProperties },
      remark: 'string',
      status: 'number',
      wyId: 'string',
    };
  }

  validate() {
    if(this.externalInfo && typeof (this.externalInfo as any).validate === 'function') {
      (this.externalInfo as any).validate();
    }
    if(this.extras) {
      $dara.Model.validateMap(this.extras);
    }
    if(Array.isArray(this.orgIds)) {
      $dara.Model.validateArray(this.orgIds);
    }
    if(Array.isArray(this.orgPaths)) {
      $dara.Model.validateArray(this.orgPaths);
    }
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserResponseBody extends $dara.Model {
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  user?: DescribeUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: DescribeUserResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


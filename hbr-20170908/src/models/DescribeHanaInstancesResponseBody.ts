// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaInstancesResponseBodyHanasHanaTagsTag extends $dara.Model {
  key?: string;
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

export class DescribeHanaInstancesResponseBodyHanasHanaTags extends $dara.Model {
  tag?: DescribeHanaInstancesResponseBodyHanasHanaTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeHanaInstancesResponseBodyHanasHanaTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesResponseBodyHanasHana extends $dara.Model {
  alertSetting?: string;
  clusterId?: string;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  hanaName?: string;
  host?: string;
  instanceNumber?: number;
  resourceGroupId?: string;
  status?: number;
  statusMessage?: string;
  tags?: DescribeHanaInstancesResponseBodyHanasHanaTags;
  useSsl?: boolean;
  userName?: string;
  validateCertificate?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clusterId: 'ClusterId',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      hanaName: 'HanaName',
      host: 'Host',
      instanceNumber: 'InstanceNumber',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
      useSsl: 'UseSsl',
      userName: 'UserName',
      validateCertificate: 'ValidateCertificate',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clusterId: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      hanaName: 'string',
      host: 'string',
      instanceNumber: 'number',
      resourceGroupId: 'string',
      status: 'number',
      statusMessage: 'string',
      tags: DescribeHanaInstancesResponseBodyHanasHanaTags,
      useSsl: 'boolean',
      userName: 'string',
      validateCertificate: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesResponseBodyHanas extends $dara.Model {
  hana?: DescribeHanaInstancesResponseBodyHanasHana[];
  static names(): { [key: string]: string } {
    return {
      hana: 'Hana',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hana: { 'type': 'array', 'itemType': DescribeHanaInstancesResponseBodyHanasHana },
    };
  }

  validate() {
    if(Array.isArray(this.hana)) {
      $dara.Model.validateArray(this.hana);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  hanas?: DescribeHanaInstancesResponseBodyHanas;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4003DD68-3C3C-5071-B4FC-631A6C1BAC1C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 21
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanas: 'Hanas',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanas: DescribeHanaInstancesResponseBodyHanas,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.hanas && typeof (this.hanas as any).validate === 'function') {
      (this.hanas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


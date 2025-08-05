// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaInstancesResponseBodyHanasHanaTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * ace:rm:rgld
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * rg-acfmwutpyat2kwy
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
  /**
   * @remarks
   * The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.
   * 
   * @example
   * INHERITED
   */
  alertSetting?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0004cf6g6******0yd7y
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   **SELF_ACCOUNT**: Data is backed up within the same Alibaba Cloud account.
   * *   **CROSS_ACCOUNT**: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The name of the SAP HANA instance.
   * 
   * @example
   * HANA-DEV
   */
  hanaName?: string;
  /**
   * @remarks
   * The private or internal IP address of the host where the primary node of the SAP HANA instance resides.
   * 
   * @example
   * 47.100.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The instance number of the SAP HANA system.
   * 
   * @example
   * 00
   */
  instanceNumber?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmvnf22m7itha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the SAP HANA instance. Valid values:
   * 
   * *   INITIALIZING: The instance is being initialized.
   * *   INITIALIZED: The instance is registered.
   * *   INVALID_HANA_NODE: The instance is invalid.
   * *   INITIALIZE_FAILED: The client fails to be installed on the instance.
   * 
   * @example
   * INITIALIZED
   */
  status?: number;
  /**
   * @remarks
   * The status information.
   * 
   * @example
   * INSTALL_CLIENT_FAILED
   */
  statusMessage?: string;
  /**
   * @remarks
   * The tags of the SAP HANA instance.
   */
  tags?: DescribeHanaInstancesResponseBodyHanasHanaTags;
  /**
   * @remarks
   * Indicates whether the SAP HANA instance is connected over Secure Sockets Layer (SSL). Valid values:
   * 
   * *   true: The SAP HANA instance is connected over SSL.
   * *   false: The SAP HANA instance is not connected over SSL.
   * 
   * @example
   * true
   */
  useSsl?: boolean;
  /**
   * @remarks
   * The username of the SYSTEMDB database.
   * 
   * @example
   * admin
   */
  userName?: string;
  /**
   * @remarks
   * Indicates whether the SSL certificate of the SAP HANA instance is verified.
   * 
   * @example
   * false
   */
  validateCertificate?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0000s974******1hl
   */
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
  /**
   * @remarks
   * The information about the SAP HANA instances.
   */
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


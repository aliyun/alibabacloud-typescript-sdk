// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomHostnamesResponseBodyHostnames extends $dara.Model {
  /**
   * @remarks
   * 免费证书申请错误码
   */
  certApplyCode?: number;
  /**
   * @remarks
   * 免费证书申请错误说明
   */
  certApplyMessage?: string;
  /**
   * @remarks
   * 证书校验HTTP名称
   */
  certHttpKey?: string;
  /**
   * @remarks
   * 证书校验HTTP内容
   */
  certHttpValue?: string;
  /**
   * @remarks
   * 证书过期时间
   */
  certNotAfter?: string;
  certStatus?: string;
  /**
   * @remarks
   * 证书校验TXT名称
   */
  certTxtKey?: string;
  /**
   * @remarks
   * 证书校验TXT内容
   */
  certTxtValue?: string;
  /**
   * @remarks
   * 证书类型
   */
  certType?: string;
  conflictWith?: string;
  /**
   * @remarks
   * 创建时间
   */
  createTime?: string;
  /**
   * @remarks
   * 用户自定义的主机名
   */
  hostname?: string;
  hostnameId?: number;
  offlineReason?: string;
  /**
   * @remarks
   * 绑定的源站记录ID
   */
  recordId?: number;
  /**
   * @remarks
   * 绑定的源站记录名
   */
  recordName?: string;
  /**
   * @remarks
   * 与主机名关联的站点ID
   */
  siteId?: number;
  /**
   * @remarks
   * 关联站点名称
   */
  siteName?: string;
  /**
   * @remarks
   * SSL开关的状态
   */
  sslFlag?: string;
  /**
   * @remarks
   * 自定义主机名状态
   */
  status?: string;
  /**
   * @remarks
   * 更新时间
   */
  updateTime?: string;
  /**
   * @remarks
   * 归属校验TXT内容
   */
  verifyCode?: string;
  /**
   * @remarks
   * 归属校验TXT名称
   */
  verifyHost?: string;
  static names(): { [key: string]: string } {
    return {
      certApplyCode: 'CertApplyCode',
      certApplyMessage: 'CertApplyMessage',
      certHttpKey: 'CertHttpKey',
      certHttpValue: 'CertHttpValue',
      certNotAfter: 'CertNotAfter',
      certStatus: 'CertStatus',
      certTxtKey: 'CertTxtKey',
      certTxtValue: 'CertTxtValue',
      certType: 'CertType',
      conflictWith: 'ConflictWith',
      createTime: 'CreateTime',
      hostname: 'Hostname',
      hostnameId: 'HostnameId',
      offlineReason: 'OfflineReason',
      recordId: 'RecordId',
      recordName: 'RecordName',
      siteId: 'SiteId',
      siteName: 'SiteName',
      sslFlag: 'SslFlag',
      status: 'Status',
      updateTime: 'UpdateTime',
      verifyCode: 'VerifyCode',
      verifyHost: 'VerifyHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certApplyCode: 'number',
      certApplyMessage: 'string',
      certHttpKey: 'string',
      certHttpValue: 'string',
      certNotAfter: 'string',
      certStatus: 'string',
      certTxtKey: 'string',
      certTxtValue: 'string',
      certType: 'string',
      conflictWith: 'string',
      createTime: 'string',
      hostname: 'string',
      hostnameId: 'number',
      offlineReason: 'string',
      recordId: 'number',
      recordName: 'string',
      siteId: 'number',
      siteName: 'string',
      sslFlag: 'string',
      status: 'string',
      updateTime: 'string',
      verifyCode: 'string',
      verifyHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomHostnamesResponseBody extends $dara.Model {
  hostnames?: ListCustomHostnamesResponseBodyHostnames[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostnames: 'Hostnames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnames: { 'type': 'array', 'itemType': ListCustomHostnamesResponseBodyHostnames },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


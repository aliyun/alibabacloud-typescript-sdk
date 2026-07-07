// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactsResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * 渠道配置 JSON（clientSecret 已脱敏为 ***）
   * 
   * @example
   * {"channels":[{"channelType":"dingtalk","clientId":"xxx","clientSecret":"xxx","targetType":"group","targetId":"xxx","robotCode":"xxx"}]}
   */
  config?: string;
  /**
   * @remarks
   * 联系人 ID
   * 
   * @example
   * job-85d64bff-50b5-4d02-aa3f-19956b17449d
   */
  contactId?: number;
  /**
   * @remarks
   * 联系人名称
   * 
   * @example
   * Tom
   */
  contactName?: string;
  /**
   * @remarks
   * 是否启用
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1783065190000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 最后修改时间
   * 
   * @example
   * 1783065190000
   */
  gmtModified?: string;
  /**
   * @remarks
   * 渠道大类（IM/WEBHOOK/SMS/MAIL）
   * 
   * @example
   * IM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      contactId: 'ContactId',
      contactName: 'ContactName',
      enabled: 'Enabled',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      contactId: 'number',
      contactName: 'string',
      enabled: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
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

export class ListContactsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 联系人列表
   */
  records?: ListContactsResponseBodyDataRecords[];
  /**
   * @remarks
   * 总记录数
   * 
   * @example
   * 21
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListContactsResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListContactsResponseBodyData;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 5EF879D0-3B43-5AD1-9BF7-52418F9C5E73
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListContactsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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


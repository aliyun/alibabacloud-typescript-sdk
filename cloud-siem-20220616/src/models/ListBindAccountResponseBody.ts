// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the cloud account.
   * 
   * @example
   * ABCXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The username of the cloud account.
   * 
   * @example
   * sas_account_xxx
   */
  accountName?: string;
  /**
   * @remarks
   * The ID that is generated when the cloud account is added.
   * 
   * @example
   * 123xxxxxxx
   */
  bindId?: number;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the account that is used to add the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  createUser?: string;
  /**
   * @remarks
   * The number of data sources that are added to the threat analysis feature within the cloud account.
   * 
   * @example
   * 2
   */
  dataSourceCount?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-11-10 12:20:35
   */
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accountId: 'AccountId',
      accountName: 'AccountName',
      bindId: 'BindId',
      cloudCode: 'CloudCode',
      createUser: 'CreateUser',
      dataSourceCount: 'DataSourceCount',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accountId: 'string',
      accountName: 'string',
      bindId: 'number',
      cloudCode: 'string',
      createUser: 'string',
      dataSourceCount: 'number',
      modifyTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListBindAccountResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListBindAccountResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


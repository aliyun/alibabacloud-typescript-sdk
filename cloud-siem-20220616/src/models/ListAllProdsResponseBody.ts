// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllProdsResponseBodyDataProdList extends $dara.Model {
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud.
   * *   aliyun: Alibaba Cloud.
   * *   hcloud: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The number of logs within the cloud service that are added to the threat analysis feature.
   * 
   * @example
   * 10
   */
  importedLogCount?: number;
  /**
   * @remarks
   * The time when the logs within the cloud service were last added to the threat analysis feature.
   * 
   * @example
   * 2023-11-23 12:12:12
   */
  modifyTime?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * sas
   */
  prodCode?: string;
  /**
   * @remarks
   * The total number of logs within the cloud service.
   * 
   * @example
   * 19
   */
  totalLogCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      importedLogCount: 'ImportedLogCount',
      modifyTime: 'ModifyTime',
      prodCode: 'ProdCode',
      totalLogCount: 'TotalLogCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      importedLogCount: 'number',
      modifyTime: 'string',
      prodCode: 'string',
      totalLogCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProdsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The cloud services.
   * 
   * @example
   * 1
   */
  prodList?: ListAllProdsResponseBodyDataProdList[];
  /**
   * @remarks
   * The total number of logs.
   * 
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      prodList: 'ProdList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      prodList: { 'type': 'array', 'itemType': ListAllProdsResponseBodyDataProdList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prodList)) {
      $dara.Model.validateArray(this.prodList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListAllProdsResponseBodyData;
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
      data: ListAllProdsResponseBodyData,
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


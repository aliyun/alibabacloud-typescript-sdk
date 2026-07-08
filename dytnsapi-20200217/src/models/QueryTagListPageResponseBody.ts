// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagListPageResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The name of the API called by the frontend.
   * 
   * @example
   * TwoElementsVerification
   */
  apiName?: string;
  /**
   * @remarks
   * The response code. OK indicates success.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The API document link.
   * 
   * @example
   * https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.388997.0.0.cf804cc7DX4vlP
   */
  docAddress?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 75
   */
  id?: number;
  /**
   * @remarks
   * The industry ID.
   * 
   * @example
   * 2
   */
  industryId?: number;
  /**
   * @remarks
   * The industry name.
   * 
   * @example
   * 测试
   */
  industryName?: string;
  /**
   * @remarks
   * The tag introduction.
   * 
   * @example
   * 这个标签是查询号码状态的。
   */
  introduction?: string;
  /**
   * @remarks
   * Indicates whether the activation has been applied for.
   * 
   * @example
   * 是
   */
  isOpen?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 阿里云
   */
  name?: string;
  /**
   * @remarks
   * - 0: hidden.
   *  
   * - 1: public.
   * 
   * @example
   * 1
   */
  saleStatusStr?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 13
   */
  sceneId?: number;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * 查询
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      code: 'Code',
      docAddress: 'DocAddress',
      id: 'Id',
      industryId: 'IndustryId',
      industryName: 'IndustryName',
      introduction: 'Introduction',
      isOpen: 'IsOpen',
      name: 'Name',
      saleStatusStr: 'SaleStatusStr',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      code: 'string',
      docAddress: 'string',
      id: 'number',
      industryId: 'number',
      industryName: 'string',
      introduction: 'string',
      isOpen: 'number',
      name: 'string',
      saleStatusStr: 'string',
      sceneId: 'number',
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagListPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 11
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 24
   */
  pageSize?: number;
  /**
   * @remarks
   * The data list.
   */
  records?: QueryTagListPageResponseBodyDataRecords[];
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 32
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 91
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': QueryTagListPageResponseBodyDataRecords },
      totalCount: 'number',
      totalPage: 'number',
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

export class QueryTagListPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. **OK** indicates success.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryTagListPageResponseBodyData;
  /**
   * @remarks
   * The description of the response code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4475657-BB7E-585D-9E09-37934F096103
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: successful.
   * 
   * - false: failed.
   * 
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
      code: 'string',
      data: QueryTagListPageResponseBodyData,
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


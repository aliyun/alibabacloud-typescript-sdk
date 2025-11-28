// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBizChainResponseBodyDataPageData extends $dara.Model {
  bizChainId?: string;
  name?: string;
  remark?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      name: 'Name',
      remark: 'Remark',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      name: 'string',
      remark: 'string',
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

export class ListBizChainResponseBodyData extends $dara.Model {
  num?: number;
  pageData?: ListBizChainResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListBizChainResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizChainResponseBody extends $dara.Model {
  code?: string;
  data?: ListBizChainResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListBizChainResponseBodyData,
      httpStatusCode: 'number',
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


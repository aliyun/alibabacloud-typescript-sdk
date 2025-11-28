// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBizChainDataResponseBodyDataPageData extends $dara.Model {
  blockHash?: string;
  blockNum?: string;
  deviceName?: string;
  iotDataDID?: string;
  memberName?: string;
  productKey?: string;
  timestamp?: number;
  txHash?: string;
  static names(): { [key: string]: string } {
    return {
      blockHash: 'BlockHash',
      blockNum: 'BlockNum',
      deviceName: 'DeviceName',
      iotDataDID: 'IotDataDID',
      memberName: 'MemberName',
      productKey: 'ProductKey',
      timestamp: 'Timestamp',
      txHash: 'TxHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHash: 'string',
      blockNum: 'string',
      deviceName: 'string',
      iotDataDID: 'string',
      memberName: 'string',
      productKey: 'string',
      timestamp: 'number',
      txHash: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizChainDataResponseBodyData extends $dara.Model {
  num?: number;
  pageData?: ListBizChainDataResponseBodyDataPageData[];
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
      pageData: { 'type': 'array', 'itemType': ListBizChainDataResponseBodyDataPageData },
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

export class ListBizChainDataResponseBody extends $dara.Model {
  code?: string;
  data?: ListBizChainDataResponseBodyData;
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
      data: ListBizChainDataResponseBodyData,
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


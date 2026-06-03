// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDictDataItemResponseBodyDataSubListData extends $dara.Model {
  classifyItemCode?: string;
  classifyItemValue?: string;
  dataItemCode?: string;
  dataItemOrder?: number;
  dataItemParent?: string;
  dataItemValue?: string;
  itemType?: number;
  static names(): { [key: string]: string } {
    return {
      classifyItemCode: 'ClassifyItemCode',
      classifyItemValue: 'ClassifyItemValue',
      dataItemCode: 'DataItemCode',
      dataItemOrder: 'DataItemOrder',
      dataItemParent: 'DataItemParent',
      dataItemValue: 'DataItemValue',
      itemType: 'ItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classifyItemCode: 'string',
      classifyItemValue: 'string',
      dataItemCode: 'string',
      dataItemOrder: 'number',
      dataItemParent: 'string',
      dataItemValue: 'string',
      itemType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDictDataItemResponseBodyData extends $dara.Model {
  classifyItemCode?: string;
  classifyItemValue?: string;
  dataItemCode?: string;
  dataItemOrder?: number;
  dataItemParent?: string;
  dataItemValue?: string;
  itemType?: number;
  subListData?: QueryDictDataItemResponseBodyDataSubListData[];
  static names(): { [key: string]: string } {
    return {
      classifyItemCode: 'ClassifyItemCode',
      classifyItemValue: 'ClassifyItemValue',
      dataItemCode: 'DataItemCode',
      dataItemOrder: 'DataItemOrder',
      dataItemParent: 'DataItemParent',
      dataItemValue: 'DataItemValue',
      itemType: 'ItemType',
      subListData: 'SubListData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classifyItemCode: 'string',
      classifyItemValue: 'string',
      dataItemCode: 'string',
      dataItemOrder: 'number',
      dataItemParent: 'string',
      dataItemValue: 'string',
      itemType: 'number',
      subListData: { 'type': 'array', 'itemType': QueryDictDataItemResponseBodyDataSubListData },
    };
  }

  validate() {
    if(Array.isArray(this.subListData)) {
      $dara.Model.validateArray(this.subListData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDictDataItemResponseBody extends $dara.Model {
  code?: string;
  data?: QueryDictDataItemResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryDictDataItemResponseBodyData },
      message: 'string',
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


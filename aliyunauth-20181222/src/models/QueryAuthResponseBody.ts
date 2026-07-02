// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuthResponseBodyDataInfoDTOListInfoDTOList extends $dara.Model {
  authOrderVid?: string;
  itemName?: string;
  itemRecordVid?: string;
  operateCode?: string;
  static names(): { [key: string]: string } {
    return {
      authOrderVid: 'AuthOrderVid',
      itemName: 'ItemName',
      itemRecordVid: 'ItemRecordVid',
      operateCode: 'OperateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authOrderVid: 'string',
      itemName: 'string',
      itemRecordVid: 'string',
      operateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuthResponseBodyDataInfoDTOList extends $dara.Model {
  infoDTOList?: QueryAuthResponseBodyDataInfoDTOListInfoDTOList[];
  static names(): { [key: string]: string } {
    return {
      infoDTOList: 'InfoDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoDTOList: { 'type': 'array', 'itemType': QueryAuthResponseBodyDataInfoDTOListInfoDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.infoDTOList)) {
      $dara.Model.validateArray(this.infoDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuthResponseBodyData extends $dara.Model {
  infoDTOList?: QueryAuthResponseBodyDataInfoDTOList;
  instanceId?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      infoDTOList: 'InfoDTOList',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoDTOList: QueryAuthResponseBodyDataInfoDTOList,
      instanceId: 'string',
      productCode: 'string',
    };
  }

  validate() {
    if(this.infoDTOList && typeof (this.infoDTOList as any).validate === 'function') {
      (this.infoDTOList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuthResponseBody extends $dara.Model {
  code?: number;
  data?: QueryAuthResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: QueryAuthResponseBodyData,
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


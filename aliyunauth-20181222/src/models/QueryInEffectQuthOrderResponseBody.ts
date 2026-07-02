// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInEffectQuthOrderResponseBodyDataListAuthItemRecordGroupItemDTOS extends $dara.Model {
  authitemID?: string;
  gmtCreated?: string;
  msg?: string;
  name?: string;
  remarkDataJson?: string;
  status?: number;
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      authitemID: 'AuthitemID',
      gmtCreated: 'GmtCreated',
      msg: 'Msg',
      name: 'Name',
      remarkDataJson: 'RemarkDataJson',
      status: 'Status',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authitemID: 'string',
      gmtCreated: 'string',
      msg: 'string',
      name: 'string',
      remarkDataJson: 'string',
      status: 'number',
      vid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInEffectQuthOrderResponseBodyDataListOperateTimes extends $dara.Model {
  end?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInEffectQuthOrderResponseBodyDataList extends $dara.Model {
  authItemRecordGroupItemDTOS?: QueryInEffectQuthOrderResponseBodyDataListAuthItemRecordGroupItemDTOS[];
  createdTime?: string;
  lastModifyTime?: string;
  operateTimes?: QueryInEffectQuthOrderResponseBodyDataListOperateTimes[];
  orderVid?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      authItemRecordGroupItemDTOS: 'AuthItemRecordGroupItemDTOS',
      createdTime: 'CreatedTime',
      lastModifyTime: 'LastModifyTime',
      operateTimes: 'OperateTimes',
      orderVid: 'OrderVid',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authItemRecordGroupItemDTOS: { 'type': 'array', 'itemType': QueryInEffectQuthOrderResponseBodyDataListAuthItemRecordGroupItemDTOS },
      createdTime: 'string',
      lastModifyTime: 'string',
      operateTimes: { 'type': 'array', 'itemType': QueryInEffectQuthOrderResponseBodyDataListOperateTimes },
      orderVid: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authItemRecordGroupItemDTOS)) {
      $dara.Model.validateArray(this.authItemRecordGroupItemDTOS);
    }
    if(Array.isArray(this.operateTimes)) {
      $dara.Model.validateArray(this.operateTimes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInEffectQuthOrderResponseBodyData extends $dara.Model {
  count?: number;
  list?: QueryInEffectQuthOrderResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      list: { 'type': 'array', 'itemType': QueryInEffectQuthOrderResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInEffectQuthOrderResponseBody extends $dara.Model {
  code?: number;
  data?: QueryInEffectQuthOrderResponseBodyData;
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
      data: QueryInEffectQuthOrderResponseBodyData,
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


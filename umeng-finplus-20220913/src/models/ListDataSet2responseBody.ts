// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSet2ResponseBodyDataData extends $dara.Model {
  createTime?: string;
  datasetId?: number;
  lineNum?: number;
  name?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      datasetId: 'datasetId',
      lineNum: 'lineNum',
      name: 'name',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasetId: 'number',
      lineNum: 'number',
      name: 'string',
      status: 'string',
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

export class ListDataSet2ResponseBodyData extends $dara.Model {
  data?: ListDataSet2ResponseBodyDataData[];
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      totalNum: 'totalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataSet2ResponseBodyDataData },
      totalNum: 'number',
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

export class ListDataSet2ResponseBody extends $dara.Model {
  code?: string;
  data?: ListDataSet2ResponseBodyData;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDataSet2ResponseBodyData,
      msg: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetResponseBodyData extends $dara.Model {
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

export class ListDataSetResponseBody extends $dara.Model {
  code?: string;
  data?: ListDataSetResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListDataSetResponseBodyData },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
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


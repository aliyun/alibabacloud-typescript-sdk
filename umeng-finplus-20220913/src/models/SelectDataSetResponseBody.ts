// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectDataSetResponseBodyData extends $dara.Model {
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

export class SelectDataSetResponseBody extends $dara.Model {
  code?: string;
  data?: SelectDataSetResponseBodyData;
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
      data: SelectDataSetResponseBodyData,
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


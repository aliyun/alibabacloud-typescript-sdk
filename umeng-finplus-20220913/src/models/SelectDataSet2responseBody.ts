// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectDataSet2ResponseBodyData extends $dara.Model {
  createTime?: string;
  datasetId?: number;
  lineNum?: number;
  name?: string;
  ossFileCount?: number;
  status?: string;
  statusMsg?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      datasetId: 'datasetId',
      lineNum: 'lineNum',
      name: 'name',
      ossFileCount: 'ossFileCount',
      status: 'status',
      statusMsg: 'statusMsg',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasetId: 'number',
      lineNum: 'number',
      name: 'string',
      ossFileCount: 'number',
      status: 'string',
      statusMsg: 'string',
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

export class SelectDataSet2ResponseBody extends $dara.Model {
  code?: string;
  data?: SelectDataSet2ResponseBodyData;
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
      data: SelectDataSet2ResponseBodyData,
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


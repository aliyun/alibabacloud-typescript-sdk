// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeTask2ResponseBodyDataDataTaskResultList extends $dara.Model {
  bcId?: number;
  code?: number;
  lineNum?: number;
  static names(): { [key: string]: string } {
    return {
      bcId: 'bcId',
      code: 'code',
      lineNum: 'lineNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bcId: 'number',
      code: 'number',
      lineNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeTask2ResponseBodyDataData extends $dara.Model {
  appId?: number;
  bcId?: number;
  computeOssFileTitle?: string;
  datasetIds?: string;
  extInfo?: string;
  fileNum?: number;
  name?: string;
  remarks?: string;
  status?: string;
  taskResultList?: ListComputeTask2ResponseBodyDataDataTaskResultList[];
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      bcId: 'bcId',
      computeOssFileTitle: 'computeOssFileTitle',
      datasetIds: 'datasetIds',
      extInfo: 'extInfo',
      fileNum: 'fileNum',
      name: 'name',
      remarks: 'remarks',
      status: 'status',
      taskResultList: 'taskResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      bcId: 'number',
      computeOssFileTitle: 'string',
      datasetIds: 'string',
      extInfo: 'string',
      fileNum: 'number',
      name: 'string',
      remarks: 'string',
      status: 'string',
      taskResultList: { 'type': 'array', 'itemType': ListComputeTask2ResponseBodyDataDataTaskResultList },
    };
  }

  validate() {
    if(Array.isArray(this.taskResultList)) {
      $dara.Model.validateArray(this.taskResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeTask2ResponseBodyData extends $dara.Model {
  data?: ListComputeTask2ResponseBodyDataData[];
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      totalNum: 'totalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListComputeTask2ResponseBodyDataData },
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

export class ListComputeTask2ResponseBody extends $dara.Model {
  code?: string;
  data?: ListComputeTask2ResponseBodyData;
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
      data: ListComputeTask2ResponseBodyData,
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


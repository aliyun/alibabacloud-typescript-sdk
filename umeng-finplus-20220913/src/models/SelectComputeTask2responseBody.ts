// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectComputeTask2ResponseBodyDataExportOssFileList extends $dara.Model {
  downLoadUrl?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      downLoadUrl: 'downLoadUrl',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downLoadUrl: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectComputeTask2ResponseBodyDataTaskResultList extends $dara.Model {
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

export class SelectComputeTask2ResponseBodyData extends $dara.Model {
  appId?: number;
  bcId?: number;
  computeOssFileTitle?: string;
  datasetIds?: string;
  exportOssFileList?: SelectComputeTask2ResponseBodyDataExportOssFileList[];
  extInfo?: string;
  fileNum?: number;
  hint?: string;
  name?: string;
  remarks?: string;
  status?: string;
  taskResultList?: SelectComputeTask2ResponseBodyDataTaskResultList[];
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      bcId: 'bcId',
      computeOssFileTitle: 'computeOssFileTitle',
      datasetIds: 'datasetIds',
      exportOssFileList: 'exportOssFileList',
      extInfo: 'extInfo',
      fileNum: 'fileNum',
      hint: 'hint',
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
      exportOssFileList: { 'type': 'array', 'itemType': SelectComputeTask2ResponseBodyDataExportOssFileList },
      extInfo: 'string',
      fileNum: 'number',
      hint: 'string',
      name: 'string',
      remarks: 'string',
      status: 'string',
      taskResultList: { 'type': 'array', 'itemType': SelectComputeTask2ResponseBodyDataTaskResultList },
    };
  }

  validate() {
    if(Array.isArray(this.exportOssFileList)) {
      $dara.Model.validateArray(this.exportOssFileList);
    }
    if(Array.isArray(this.taskResultList)) {
      $dara.Model.validateArray(this.taskResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectComputeTask2ResponseBody extends $dara.Model {
  code?: string;
  data?: SelectComputeTask2ResponseBodyData;
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
      data: SelectComputeTask2ResponseBodyData,
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


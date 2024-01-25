// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelComputeTaskByBcIdRequest extends $tea.Model {
  bcId?: number;
  static names(): { [key: string]: string } {
    return {
      bcId: 'bcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bcId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelComputeTaskByBcIdResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
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
      data: 'boolean',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelComputeTaskByBcIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelComputeTaskByBcIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelComputeTaskByBcIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskByDataSetIdRequest extends $tea.Model {
  batchInfoForm?: CreateComputeTaskByDataSetIdRequestBatchInfoForm[];
  datasetId?: number;
  name?: string;
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      batchInfoForm: 'BatchInfoForm',
      datasetId: 'DatasetId',
      name: 'Name',
      remarks: 'Remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInfoForm: { 'type': 'array', 'itemType': CreateComputeTaskByDataSetIdRequestBatchInfoForm },
      datasetId: 'number',
      name: 'string',
      remarks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskByDataSetIdResponseBody extends $tea.Model {
  code?: string;
  data?: number[];
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
      data: { 'type': 'array', 'itemType': 'number' },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskByDataSetIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateComputeTaskByDataSetIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateComputeTaskByDataSetIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskByMultiDataSetIdRequest extends $tea.Model {
  appId?: number;
  dataSetIds?: string;
  name?: string;
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      dataSetIds: 'dataSetIds',
      name: 'name',
      remarks: 'remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      dataSetIds: 'string',
      name: 'string',
      remarks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskByMultiDataSetIdResponseBody extends $tea.Model {
  code?: string;
  data?: number;
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
      data: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskByMultiDataSetIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateComputeTaskByMultiDataSetIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateComputeTaskByMultiDataSetIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvailableDataSetListResponseBody extends $tea.Model {
  code?: string;
  data?: GetAvailableDataSetListResponseBodyData[];
  msg?: string;
  requestId?: string;
  success?: string;
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
      data: { 'type': 'array', 'itemType': GetAvailableDataSetListResponseBodyData },
      msg: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvailableDataSetListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAvailableDataSetListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAvailableDataSetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeResultRequest extends $tea.Model {
  bcId?: number;
  static names(): { [key: string]: string } {
    return {
      bcId: 'bcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bcId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeResultResponseBody extends $tea.Model {
  code?: string;
  data?: GetComputeResultResponseBodyData;
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
      data: GetComputeResultResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetComputeResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetComputeResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSetStatusRequest extends $tea.Model {
  dataSetId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'dataSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSetStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetDataSetStatusResponseBodyData;
  msg?: string;
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      success: 'Success',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDataSetStatusResponseBodyData,
      msg: 'string',
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSetStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSetStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDataSetStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSetStsAKResponseBody extends $tea.Model {
  code?: string;
  data?: GetDataSetStsAKResponseBodyData;
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
      data: GetDataSetStsAKResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSetStsAKResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSetStsAKResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDataSetStsAKResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDataSetTaskRequest extends $tea.Model {
  dataSetType?: number;
  idType?: number;
  name?: string;
  ossFileName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSetType: 'dataSetType',
      idType: 'idType',
      name: 'name',
      ossFileName: 'ossFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetType: 'number',
      idType: 'number',
      name: 'string',
      ossFileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDataSetTaskResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  msg?: string;
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      success: 'Success',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      msg: 'string',
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDataSetTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitDataSetTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitDataSetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelYydTaskByBcIdRequest extends $tea.Model {
  bcId?: number;
  static names(): { [key: string]: string } {
    return {
      bcId: 'bcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bcId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelYydTaskByBcIdResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
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
      data: 'boolean',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelYydTaskByBcIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelYydTaskByBcIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelYydTaskByBcIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateYydComputeTaskRequest extends $tea.Model {
  datasetId?: number;
  name?: string;
  remarks?: string;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      name: 'Name',
      remarks: 'Remarks',
      appId: 'appId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      name: 'string',
      remarks: 'string',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateYydComputeTaskResponseBody extends $tea.Model {
  code?: string;
  data?: number;
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
      data: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateYydComputeTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateYydComputeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateYydComputeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateYydDataSetRequest extends $tea.Model {
  name?: string;
  ossFileName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ossFileName: 'ossFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ossFileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateYydDataSetResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  msg?: string;
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      success: 'Success',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      msg: 'string',
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateYydDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateYydDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateYydDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListYydComputeTaskListResponseBody extends $tea.Model {
  code?: string;
  data?: ListYydComputeTaskListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListYydComputeTaskListResponseBodyData },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListYydComputeTaskListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListYydComputeTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListYydComputeTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListYydDataSetResponseBody extends $tea.Model {
  code?: string;
  data?: ListYydDataSetResponseBodyData[];
  msg?: string;
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      success: 'Success',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListYydDataSetResponseBodyData },
      msg: 'string',
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListYydDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListYydDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListYydDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskByDataSetIdRequestBatchInfoFormCuVersions extends $tea.Model {
  cuId?: string;
  cuVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cuId: 'CuId',
      cuVersion: 'CuVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuId: 'string',
      cuVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskByDataSetIdRequestBatchInfoForm extends $tea.Model {
  appId?: number;
  cuVersions?: CreateComputeTaskByDataSetIdRequestBatchInfoFormCuVersions[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cuVersions: 'CuVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      cuVersions: { 'type': 'array', 'itemType': CreateComputeTaskByDataSetIdRequestBatchInfoFormCuVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvailableDataSetListResponseBodyData extends $tea.Model {
  createTime?: string;
  dataSetType?: number;
  datasetId?: number;
  idTypeDesc?: string;
  name?: string;
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dataSetType: 'dataSetType',
      datasetId: 'datasetId',
      idTypeDesc: 'idTypeDesc',
      name: 'name',
      statusDesc: 'statusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSetType: 'number',
      datasetId: 'number',
      idTypeDesc: 'string',
      name: 'string',
      statusDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeResultResponseBodyData extends $tea.Model {
  bcId?: number;
  billedNum?: number;
  code10000Num?: number;
  code108Num?: number;
  code109Num?: number;
  exportFileName?: string;
  fileLineNumber?: number;
  name?: string;
  password?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      bcId: 'bcId',
      billedNum: 'billedNum',
      code10000Num: 'code10000Num',
      code108Num: 'code108Num',
      code109Num: 'code109Num',
      exportFileName: 'exportFileName',
      fileLineNumber: 'fileLineNumber',
      name: 'name',
      password: 'password',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bcId: 'number',
      billedNum: 'number',
      code10000Num: 'number',
      code108Num: 'number',
      code109Num: 'number',
      exportFileName: 'string',
      fileLineNumber: 'number',
      name: 'string',
      password: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSetStatusResponseBodyData extends $tea.Model {
  createTime?: string;
  dataSetType?: number;
  datasetId?: number;
  idTypeDesc?: string;
  message?: string;
  name?: string;
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dataSetType: 'dataSetType',
      datasetId: 'datasetId',
      idTypeDesc: 'idTypeDesc',
      message: 'message',
      name: 'name',
      statusDesc: 'statusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSetType: 'number',
      datasetId: 'number',
      idTypeDesc: 'string',
      message: 'string',
      name: 'string',
      statusDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSetStsAKResponseBodyData extends $tea.Model {
  bucket?: string;
  endpoint?: string;
  id?: string;
  path?: string;
  secret?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      id: 'Id',
      path: 'Path',
      secret: 'Secret',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      id: 'string',
      path: 'string',
      secret: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListYydComputeTaskListResponseBodyData extends $tea.Model {
  appId?: number;
  bcId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  name?: string;
  remarks?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      bcId: 'bcId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      name: 'name',
      remarks: 'remarks',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      bcId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      name: 'string',
      remarks: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListYydDataSetResponseBodyData extends $tea.Model {
  createTime?: string;
  dataSetType?: number;
  datasetId?: number;
  idTypeDesc?: string;
  message?: string;
  name?: string;
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dataSetType: 'dataSetType',
      datasetId: 'datasetId',
      idTypeDesc: 'idTypeDesc',
      message: 'message',
      name: 'name',
      statusDesc: 'statusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSetType: 'number',
      datasetId: 'number',
      idTypeDesc: 'string',
      message: 'string',
      name: 'string',
      statusDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("umeng-finplus", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async cancelComputeTaskByBcIdWithOptions(request: CancelComputeTaskByBcIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelComputeTaskByBcIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bcId)) {
      query["bcId"] = request.bcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelComputeTaskByBcId",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/cancelComputeTaskByBcId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelComputeTaskByBcIdResponse>(await this.callApi(params, req, runtime), new CancelComputeTaskByBcIdResponse({}));
  }

  async cancelComputeTaskByBcId(request: CancelComputeTaskByBcIdRequest): Promise<CancelComputeTaskByBcIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelComputeTaskByBcIdWithOptions(request, headers, runtime);
  }

  async createComputeTaskByDataSetIdWithOptions(request: CreateComputeTaskByDataSetIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateComputeTaskByDataSetIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.batchInfoForm)) {
      body["BatchInfoForm"] = request.batchInfoForm;
    }

    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.remarks)) {
      body["Remarks"] = request.remarks;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateComputeTaskByDataSetId",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/createComputeTaskByDataSetId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateComputeTaskByDataSetIdResponse>(await this.callApi(params, req, runtime), new CreateComputeTaskByDataSetIdResponse({}));
  }

  async createComputeTaskByDataSetId(request: CreateComputeTaskByDataSetIdRequest): Promise<CreateComputeTaskByDataSetIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComputeTaskByDataSetIdWithOptions(request, headers, runtime);
  }

  async createComputeTaskByMultiDataSetIdWithOptions(request: CreateComputeTaskByMultiDataSetIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateComputeTaskByMultiDataSetIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!Util.isUnset(request.dataSetIds)) {
      body["dataSetIds"] = request.dataSetIds;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.remarks)) {
      body["remarks"] = request.remarks;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateComputeTaskByMultiDataSetId",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/createComputeTaskByMultiDataSetId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateComputeTaskByMultiDataSetIdResponse>(await this.callApi(params, req, runtime), new CreateComputeTaskByMultiDataSetIdResponse({}));
  }

  async createComputeTaskByMultiDataSetId(request: CreateComputeTaskByMultiDataSetIdRequest): Promise<CreateComputeTaskByMultiDataSetIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComputeTaskByMultiDataSetIdWithOptions(request, headers, runtime);
  }

  async getAvailableDataSetListWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAvailableDataSetListResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAvailableDataSetList",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/getAvailableDataSetList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAvailableDataSetListResponse>(await this.callApi(params, req, runtime), new GetAvailableDataSetListResponse({}));
  }

  async getAvailableDataSetList(): Promise<GetAvailableDataSetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAvailableDataSetListWithOptions(headers, runtime);
  }

  async getComputeResultWithOptions(request: GetComputeResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetComputeResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bcId)) {
      query["bcId"] = request.bcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetComputeResult",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/getComputeTaskResult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetComputeResultResponse>(await this.callApi(params, req, runtime), new GetComputeResultResponse({}));
  }

  async getComputeResult(request: GetComputeResultRequest): Promise<GetComputeResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComputeResultWithOptions(request, headers, runtime);
  }

  async getDataSetStatusWithOptions(request: GetDataSetStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDataSetStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSetId)) {
      query["dataSetId"] = request.dataSetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataSetStatus",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/getDataSetStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDataSetStatusResponse>(await this.callApi(params, req, runtime), new GetDataSetStatusResponse({}));
  }

  async getDataSetStatus(request: GetDataSetStatusRequest): Promise<GetDataSetStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataSetStatusWithOptions(request, headers, runtime);
  }

  async getDataSetStsAKWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDataSetStsAKResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDataSetStsAK",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/getDataSetStsAk`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDataSetStsAKResponse>(await this.callApi(params, req, runtime), new GetDataSetStsAKResponse({}));
  }

  async getDataSetStsAK(): Promise<GetDataSetStsAKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataSetStsAKWithOptions(headers, runtime);
  }

  async submitDataSetTaskWithOptions(request: SubmitDataSetTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitDataSetTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSetType)) {
      body["dataSetType"] = request.dataSetType;
    }

    if (!Util.isUnset(request.idType)) {
      body["idType"] = request.idType;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.ossFileName)) {
      body["ossFileName"] = request.ossFileName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDataSetTask",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/submitDataSetTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitDataSetTaskResponse>(await this.callApi(params, req, runtime), new SubmitDataSetTaskResponse({}));
  }

  async submitDataSetTask(request: SubmitDataSetTaskRequest): Promise<SubmitDataSetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitDataSetTaskWithOptions(request, headers, runtime);
  }

  async cancelYydTaskByBcIdWithOptions(request: CancelYydTaskByBcIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelYydTaskByBcIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bcId)) {
      query["bcId"] = request.bcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "cancelYydTaskByBcId",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/yyd/task/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelYydTaskByBcIdResponse>(await this.callApi(params, req, runtime), new CancelYydTaskByBcIdResponse({}));
  }

  async cancelYydTaskByBcId(request: CancelYydTaskByBcIdRequest): Promise<CancelYydTaskByBcIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelYydTaskByBcIdWithOptions(request, headers, runtime);
  }

  async createYydComputeTaskWithOptions(request: CreateYydComputeTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateYydComputeTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.remarks)) {
      body["Remarks"] = request.remarks;
    }

    if (!Util.isUnset(request.appId)) {
      body["appId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "createYydComputeTask",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/yyd/task/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateYydComputeTaskResponse>(await this.callApi(params, req, runtime), new CreateYydComputeTaskResponse({}));
  }

  async createYydComputeTask(request: CreateYydComputeTaskRequest): Promise<CreateYydComputeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createYydComputeTaskWithOptions(request, headers, runtime);
  }

  async createYydDataSetWithOptions(request: CreateYydDataSetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateYydDataSetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.ossFileName)) {
      body["ossFileName"] = request.ossFileName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "createYydDataSet",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/yyd/dataset/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateYydDataSetResponse>(await this.callApi(params, req, runtime), new CreateYydDataSetResponse({}));
  }

  async createYydDataSet(request: CreateYydDataSetRequest): Promise<CreateYydDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createYydDataSetWithOptions(request, headers, runtime);
  }

  async listYydComputeTaskListWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListYydComputeTaskListResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "listYydComputeTaskList",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/yyd/task/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListYydComputeTaskListResponse>(await this.callApi(params, req, runtime), new ListYydComputeTaskListResponse({}));
  }

  async listYydComputeTaskList(): Promise<ListYydComputeTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listYydComputeTaskListWithOptions(headers, runtime);
  }

  async listYydDataSetWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListYydDataSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "listYydDataSet",
      version: "2021-11-30",
      protocol: "HTTPS",
      pathname: `/batch_compute/yyd/dataset/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListYydDataSetResponse>(await this.callApi(params, req, runtime), new ListYydDataSetResponse({}));
  }

  async listYydDataSet(): Promise<ListYydDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listYydDataSetWithOptions(headers, runtime);
  }

}

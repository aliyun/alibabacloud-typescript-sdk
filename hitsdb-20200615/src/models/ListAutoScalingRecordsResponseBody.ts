// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoScalingRecordsResponseBodyDataScaleRecords extends $dara.Model {
  detail?: string;
  endTime?: string;
  id?: string;
  instanceId?: string;
  oldValue?: string;
  resourceType?: string;
  specGroupId?: string;
  startTime?: string;
  status?: string;
  strategy?: string;
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      endTime: 'EndTime',
      id: 'Id',
      instanceId: 'InstanceId',
      oldValue: 'OldValue',
      resourceType: 'ResourceType',
      specGroupId: 'SpecGroupId',
      startTime: 'StartTime',
      status: 'Status',
      strategy: 'Strategy',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      endTime: 'string',
      id: 'string',
      instanceId: 'string',
      oldValue: 'string',
      resourceType: 'string',
      specGroupId: 'string',
      startTime: 'string',
      status: 'string',
      strategy: 'string',
      targetValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingRecordsResponseBodyData extends $dara.Model {
  pageNum?: number;
  pageSize?: number;
  scaleRecords?: ListAutoScalingRecordsResponseBodyDataScaleRecords[];
  totalNum?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      scaleRecords: 'ScaleRecords',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      scaleRecords: { 'type': 'array', 'itemType': ListAutoScalingRecordsResponseBodyDataScaleRecords },
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scaleRecords)) {
      $dara.Model.validateArray(this.scaleRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingRecordsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: ListAutoScalingRecordsResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListAutoScalingRecordsResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
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


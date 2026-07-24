// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobDebugDataResponseBodyDataDataRows extends $dara.Model {
  flinkInstanceId?: string;
  jobName?: string;
  offset?: number;
  partition?: number;
  processedValue?: string;
  timestamp?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      flinkInstanceId: 'FlinkInstanceId',
      jobName: 'JobName',
      offset: 'Offset',
      partition: 'Partition',
      processedValue: 'ProcessedValue',
      timestamp: 'Timestamp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flinkInstanceId: 'string',
      jobName: 'string',
      offset: 'number',
      partition: 'number',
      processedValue: 'string',
      timestamp: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDebugDataResponseBodyData extends $dara.Model {
  dataRows?: GetJobDebugDataResponseBodyDataDataRows[];
  debugField?: string;
  hasMore?: boolean;
  limit?: string;
  nextCursor?: string;
  static names(): { [key: string]: string } {
    return {
      dataRows: 'DataRows',
      debugField: 'DebugField',
      hasMore: 'HasMore',
      limit: 'Limit',
      nextCursor: 'NextCursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRows: { 'type': 'array', 'itemType': GetJobDebugDataResponseBodyDataDataRows },
      debugField: 'string',
      hasMore: 'boolean',
      limit: 'string',
      nextCursor: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataRows)) {
      $dara.Model.validateArray(this.dataRows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDebugDataResponseBody extends $dara.Model {
  code?: number;
  data?: GetJobDebugDataResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetJobDebugDataResponseBodyData,
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


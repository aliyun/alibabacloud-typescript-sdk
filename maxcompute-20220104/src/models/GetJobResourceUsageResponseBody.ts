// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResourceUsageResponseBodyDataJobResourceUsageList extends $dara.Model {
  cuUsage?: number;
  date?: string;
  jobOwner?: string;
  memoryUsage?: number;
  quotaNickname?: string;
  static names(): { [key: string]: string } {
    return {
      cuUsage: 'cuUsage',
      date: 'date',
      jobOwner: 'jobOwner',
      memoryUsage: 'memoryUsage',
      quotaNickname: 'quotaNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuUsage: 'number',
      date: 'string',
      jobOwner: 'string',
      memoryUsage: 'number',
      quotaNickname: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponseBodyData extends $dara.Model {
  jobResourceUsageList?: GetJobResourceUsageResponseBodyDataJobResourceUsageList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobResourceUsageList: 'jobResourceUsageList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResourceUsageList: { 'type': 'array', 'itemType': GetJobResourceUsageResponseBodyDataJobResourceUsageList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobResourceUsageList)) {
      $dara.Model.validateArray(this.jobResourceUsageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponseBody extends $dara.Model {
  data?: GetJobResourceUsageResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetJobResourceUsageResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
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


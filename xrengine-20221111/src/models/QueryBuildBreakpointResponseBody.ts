// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBuildBreakpointResponseBodyDataBreakpoints extends $dara.Model {
  algorithm?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuildBreakpointResponseBodyData extends $dara.Model {
  breakpoints?: QueryBuildBreakpointResponseBodyDataBreakpoints[];
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      breakpoints: 'Breakpoints',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakpoints: { 'type': 'array', 'itemType': QueryBuildBreakpointResponseBodyDataBreakpoints },
      projectId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.breakpoints)) {
      $dara.Model.validateArray(this.breakpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuildBreakpointResponseBody extends $dara.Model {
  code?: string;
  data?: QueryBuildBreakpointResponseBodyData;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryBuildBreakpointResponseBodyData,
      errorName: 'string',
      httpCode: 'number',
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


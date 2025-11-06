// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVhostErrorByTaskIdResponseBodyDataVoListVhostErrorDO extends $dara.Model {
  errorMessage?: number;
  taskId?: number;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      taskId: 'TaskId',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'number',
      taskId: 'number',
      vhostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVhostErrorByTaskIdResponseBodyDataVoList extends $dara.Model {
  vhostErrorDO?: GetVhostErrorByTaskIdResponseBodyDataVoListVhostErrorDO[];
  static names(): { [key: string]: string } {
    return {
      vhostErrorDO: 'VhostErrorDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vhostErrorDO: { 'type': 'array', 'itemType': GetVhostErrorByTaskIdResponseBodyDataVoListVhostErrorDO },
    };
  }

  validate() {
    if(Array.isArray(this.vhostErrorDO)) {
      $dara.Model.validateArray(this.vhostErrorDO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVhostErrorByTaskIdResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  voList?: GetVhostErrorByTaskIdResponseBodyDataVoList;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      voList: 'VoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      voList: GetVhostErrorByTaskIdResponseBodyDataVoList,
    };
  }

  validate() {
    if(this.voList && typeof (this.voList as any).validate === 'function') {
      (this.voList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVhostErrorByTaskIdResponseBody extends $dara.Model {
  code?: number;
  data?: GetVhostErrorByTaskIdResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetVhostErrorByTaskIdResponseBodyData,
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


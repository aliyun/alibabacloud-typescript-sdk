// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBindingErrorByTaskIdResponseBodyDataVoListBindingErrorDO extends $dara.Model {
  destination?: string;
  destinationType?: string;
  errorMessage?: string;
  routingKey?: string;
  src?: string;
  taskId?: number;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      destinationType: 'DestinationType',
      errorMessage: 'ErrorMessage',
      routingKey: 'RoutingKey',
      src: 'Src',
      taskId: 'TaskId',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      destinationType: 'string',
      errorMessage: 'string',
      routingKey: 'string',
      src: 'string',
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

export class GetBindingErrorByTaskIdResponseBodyDataVoList extends $dara.Model {
  bindingErrorDO?: GetBindingErrorByTaskIdResponseBodyDataVoListBindingErrorDO[];
  static names(): { [key: string]: string } {
    return {
      bindingErrorDO: 'BindingErrorDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingErrorDO: { 'type': 'array', 'itemType': GetBindingErrorByTaskIdResponseBodyDataVoListBindingErrorDO },
    };
  }

  validate() {
    if(Array.isArray(this.bindingErrorDO)) {
      $dara.Model.validateArray(this.bindingErrorDO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindingErrorByTaskIdResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  voList?: GetBindingErrorByTaskIdResponseBodyDataVoList;
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
      voList: GetBindingErrorByTaskIdResponseBodyDataVoList,
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

export class GetBindingErrorByTaskIdResponseBody extends $dara.Model {
  code?: number;
  data?: GetBindingErrorByTaskIdResponseBodyData;
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
      data: GetBindingErrorByTaskIdResponseBodyData,
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


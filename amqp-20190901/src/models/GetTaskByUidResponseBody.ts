// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskByUidResponseBodyDataVoListImportDefinitionTaskDO extends $dara.Model {
  bindingNum?: number;
  exchangeNum?: number;
  gmtCreate?: string;
  id?: number;
  importType?: number;
  instanceId?: string;
  instanceName?: string;
  queueNum?: number;
  status?: number;
  userId?: number;
  vhostName?: string;
  vhostNum?: number;
  static names(): { [key: string]: string } {
    return {
      bindingNum: 'BindingNum',
      exchangeNum: 'ExchangeNum',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      importType: 'ImportType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      queueNum: 'QueueNum',
      status: 'Status',
      userId: 'UserId',
      vhostName: 'VhostName',
      vhostNum: 'VhostNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingNum: 'number',
      exchangeNum: 'number',
      gmtCreate: 'string',
      id: 'number',
      importType: 'number',
      instanceId: 'string',
      instanceName: 'string',
      queueNum: 'number',
      status: 'number',
      userId: 'number',
      vhostName: 'string',
      vhostNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskByUidResponseBodyDataVoList extends $dara.Model {
  importDefinitionTaskDO?: GetTaskByUidResponseBodyDataVoListImportDefinitionTaskDO[];
  static names(): { [key: string]: string } {
    return {
      importDefinitionTaskDO: 'ImportDefinitionTaskDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importDefinitionTaskDO: { 'type': 'array', 'itemType': GetTaskByUidResponseBodyDataVoListImportDefinitionTaskDO },
    };
  }

  validate() {
    if(Array.isArray(this.importDefinitionTaskDO)) {
      $dara.Model.validateArray(this.importDefinitionTaskDO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskByUidResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  voList?: GetTaskByUidResponseBodyDataVoList;
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
      voList: GetTaskByUidResponseBodyDataVoList,
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

export class GetTaskByUidResponseBody extends $dara.Model {
  code?: number;
  data?: GetTaskByUidResponseBodyData;
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
      data: GetTaskByUidResponseBodyData,
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


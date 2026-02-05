// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseSupportPlanSimpleResponseBodyDataDocs extends $dara.Model {
  docId?: number;
  fileName?: string;
  freeOrderApplyCode?: string;
  name?: string;
  orderId?: string;
  uploadTime?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      fileName: 'fileName',
      freeOrderApplyCode: 'freeOrderApplyCode',
      name: 'name',
      orderId: 'orderId',
      uploadTime: 'uploadTime',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'number',
      fileName: 'string',
      freeOrderApplyCode: 'string',
      name: 'string',
      orderId: 'string',
      uploadTime: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanSimpleResponseBodyDataNodesDocNode extends $dara.Model {
  docId?: number;
  docName?: string;
  docSubmitTime?: string;
  fileName?: string;
  freeOrderApplyCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      docName: 'docName',
      docSubmitTime: 'docSubmitTime',
      fileName: 'fileName',
      freeOrderApplyCode: 'freeOrderApplyCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'number',
      docName: 'string',
      docSubmitTime: 'string',
      fileName: 'string',
      freeOrderApplyCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanSimpleResponseBodyDataNodesFinishNode extends $dara.Model {
  finishTime?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'finishTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanSimpleResponseBodyDataNodesFreeOrderAuditNode extends $dara.Model {
  auditTime?: string;
  status?: string;
  statusName?: string;
  static names(): { [key: string]: string } {
    return {
      auditTime: 'auditTime',
      status: 'status',
      statusName: 'statusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditTime: 'string',
      status: 'string',
      statusName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanSimpleResponseBodyDataNodesFreeOrderNode extends $dara.Model {
  applyTime?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      applyTime: 'applyTime',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanSimpleResponseBodyDataNodesOrderNode extends $dara.Model {
  payTime?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      payTime: 'payTime',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payTime: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanSimpleResponseBodyDataNodesServiceImplementation extends $dara.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanSimpleResponseBodyDataNodes extends $dara.Model {
  docNode?: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesDocNode;
  finishNode?: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesFinishNode;
  freeOrderAuditNode?: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesFreeOrderAuditNode;
  freeOrderNode?: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesFreeOrderNode;
  name?: string;
  orderDate?: number;
  orderNode?: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesOrderNode;
  serviceImplementation?: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesServiceImplementation;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      docNode: 'docNode',
      finishNode: 'finishNode',
      freeOrderAuditNode: 'freeOrderAuditNode',
      freeOrderNode: 'freeOrderNode',
      name: 'name',
      orderDate: 'orderDate',
      orderNode: 'orderNode',
      serviceImplementation: 'serviceImplementation',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docNode: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesDocNode,
      finishNode: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesFinishNode,
      freeOrderAuditNode: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesFreeOrderAuditNode,
      freeOrderNode: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesFreeOrderNode,
      name: 'string',
      orderDate: 'number',
      orderNode: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesOrderNode,
      serviceImplementation: ListEnterpriseSupportPlanSimpleResponseBodyDataNodesServiceImplementation,
      status: 'number',
    };
  }

  validate() {
    if(this.docNode && typeof (this.docNode as any).validate === 'function') {
      (this.docNode as any).validate();
    }
    if(this.finishNode && typeof (this.finishNode as any).validate === 'function') {
      (this.finishNode as any).validate();
    }
    if(this.freeOrderAuditNode && typeof (this.freeOrderAuditNode as any).validate === 'function') {
      (this.freeOrderAuditNode as any).validate();
    }
    if(this.freeOrderNode && typeof (this.freeOrderNode as any).validate === 'function') {
      (this.freeOrderNode as any).validate();
    }
    if(this.orderNode && typeof (this.orderNode as any).validate === 'function') {
      (this.orderNode as any).validate();
    }
    if(this.serviceImplementation && typeof (this.serviceImplementation as any).validate === 'function') {
      (this.serviceImplementation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanSimpleResponseBodyDataOperateInfos extends $dara.Model {
  canClick?: boolean;
  text?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      canClick: 'canClick',
      text: 'text',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canClick: 'boolean',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanSimpleResponseBodyData extends $dara.Model {
  canApplyFreeOrder?: boolean;
  customerId?: string;
  docs?: ListEnterpriseSupportPlanSimpleResponseBodyDataDocs[];
  endTime?: string;
  firstPayTime?: string;
  freeOrderApplyCode?: string;
  freeOrderApplyId?: number;
  freeOrderApplyTime?: string;
  freeOrderApprovedTime?: string;
  freeOrderExpectStartTime?: string;
  instanceId?: string;
  nodes?: ListEnterpriseSupportPlanSimpleResponseBodyDataNodes[];
  operateInfos?: ListEnterpriseSupportPlanSimpleResponseBodyDataOperateInfos[];
  orderIds?: number[];
  serviceName?: string;
  serviceStatus?: string;
  serviceStatusName?: string;
  serviceType?: string;
  sortTime?: string;
  startTime?: string;
  taskNum?: number;
  static names(): { [key: string]: string } {
    return {
      canApplyFreeOrder: 'canApplyFreeOrder',
      customerId: 'customerId',
      docs: 'docs',
      endTime: 'endTime',
      firstPayTime: 'firstPayTime',
      freeOrderApplyCode: 'freeOrderApplyCode',
      freeOrderApplyId: 'freeOrderApplyId',
      freeOrderApplyTime: 'freeOrderApplyTime',
      freeOrderApprovedTime: 'freeOrderApprovedTime',
      freeOrderExpectStartTime: 'freeOrderExpectStartTime',
      instanceId: 'instanceId',
      nodes: 'nodes',
      operateInfos: 'operateInfos',
      orderIds: 'orderIds',
      serviceName: 'serviceName',
      serviceStatus: 'serviceStatus',
      serviceStatusName: 'serviceStatusName',
      serviceType: 'serviceType',
      sortTime: 'sortTime',
      startTime: 'startTime',
      taskNum: 'taskNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canApplyFreeOrder: 'boolean',
      customerId: 'string',
      docs: { 'type': 'array', 'itemType': ListEnterpriseSupportPlanSimpleResponseBodyDataDocs },
      endTime: 'string',
      firstPayTime: 'string',
      freeOrderApplyCode: 'string',
      freeOrderApplyId: 'number',
      freeOrderApplyTime: 'string',
      freeOrderApprovedTime: 'string',
      freeOrderExpectStartTime: 'string',
      instanceId: 'string',
      nodes: { 'type': 'array', 'itemType': ListEnterpriseSupportPlanSimpleResponseBodyDataNodes },
      operateInfos: { 'type': 'array', 'itemType': ListEnterpriseSupportPlanSimpleResponseBodyDataOperateInfos },
      orderIds: { 'type': 'array', 'itemType': 'number' },
      serviceName: 'string',
      serviceStatus: 'string',
      serviceStatusName: 'string',
      serviceType: 'string',
      sortTime: 'string',
      startTime: 'string',
      taskNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.docs)) {
      $dara.Model.validateArray(this.docs);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.operateInfos)) {
      $dara.Model.validateArray(this.operateInfos);
    }
    if(Array.isArray(this.orderIds)) {
      $dara.Model.validateArray(this.orderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanSimpleResponseBody extends $dara.Model {
  code?: string;
  data?: ListEnterpriseSupportPlanSimpleResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListEnterpriseSupportPlanSimpleResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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


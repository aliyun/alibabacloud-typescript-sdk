// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ListEnterpriseSupportPlanResponseBodyDataDocsAttachments extends $dara.Model {
  docId?: number;
  evaluated?: boolean;
  evaluationUrl?: string;
  fileName?: string;
  freeOrderApplyCode?: string;
  name?: string;
  orderId?: string;
  uploadTime?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      evaluated: 'evaluated',
      evaluationUrl: 'evaluationUrl',
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
      evaluated: 'boolean',
      evaluationUrl: 'string',
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

export class ListEnterpriseSupportPlanResponseBodyDataDocs extends $dara.Model {
  attachments?: ListEnterpriseSupportPlanResponseBodyDataDocsAttachments[];
  docId?: number;
  evaluated?: boolean;
  evaluationUrl?: string;
  fileName?: string;
  freeOrderApplyCode?: string;
  name?: string;
  orderId?: string;
  uploadTime?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
      docId: 'docId',
      evaluated: 'evaluated',
      evaluationUrl: 'evaluationUrl',
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
      attachments: { 'type': 'array', 'itemType': ListEnterpriseSupportPlanResponseBodyDataDocsAttachments },
      docId: 'number',
      evaluated: 'boolean',
      evaluationUrl: 'string',
      fileName: 'string',
      freeOrderApplyCode: 'string',
      name: 'string',
      orderId: 'string',
      uploadTime: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanResponseBodyDataNodesDocNode extends $dara.Model {
  attachments?: any[];
  docId?: number;
  docName?: string;
  docSubmitTime?: string;
  fileName?: string;
  freeOrderApplyCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
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
      attachments: { 'type': 'array', 'itemType': 'any' },
      docId: 'number',
      docName: 'string',
      docSubmitTime: 'string',
      fileName: 'string',
      freeOrderApplyCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanResponseBodyDataNodesFinishNode extends $dara.Model {
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

export class ListEnterpriseSupportPlanResponseBodyDataNodesFreeOrderAuditNode extends $dara.Model {
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

export class ListEnterpriseSupportPlanResponseBodyDataNodesFreeOrderNode extends $dara.Model {
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

export class ListEnterpriseSupportPlanResponseBodyDataNodesOrderNode extends $dara.Model {
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

export class ListEnterpriseSupportPlanResponseBodyDataNodesServiceImplementation extends $dara.Model {
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

export class ListEnterpriseSupportPlanResponseBodyDataNodes extends $dara.Model {
  docNode?: ListEnterpriseSupportPlanResponseBodyDataNodesDocNode;
  finishNode?: ListEnterpriseSupportPlanResponseBodyDataNodesFinishNode;
  freeOrderAuditNode?: ListEnterpriseSupportPlanResponseBodyDataNodesFreeOrderAuditNode;
  freeOrderNode?: ListEnterpriseSupportPlanResponseBodyDataNodesFreeOrderNode;
  name?: string;
  orderDate?: number;
  orderNode?: ListEnterpriseSupportPlanResponseBodyDataNodesOrderNode;
  serviceImplementation?: ListEnterpriseSupportPlanResponseBodyDataNodesServiceImplementation;
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
      docNode: ListEnterpriseSupportPlanResponseBodyDataNodesDocNode,
      finishNode: ListEnterpriseSupportPlanResponseBodyDataNodesFinishNode,
      freeOrderAuditNode: ListEnterpriseSupportPlanResponseBodyDataNodesFreeOrderAuditNode,
      freeOrderNode: ListEnterpriseSupportPlanResponseBodyDataNodesFreeOrderNode,
      name: 'string',
      orderDate: 'number',
      orderNode: ListEnterpriseSupportPlanResponseBodyDataNodesOrderNode,
      serviceImplementation: ListEnterpriseSupportPlanResponseBodyDataNodesServiceImplementation,
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

export class ListEnterpriseSupportPlanResponseBodyDataOperateInfos extends $dara.Model {
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

export class ListEnterpriseSupportPlanResponseBodyDataTags extends $dara.Model {
  extendInfos?: string[];
  show?: boolean;
  tagCode?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfos: 'extendInfos',
      show: 'show',
      tagCode: 'tagCode',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfos: { 'type': 'array', 'itemType': 'string' },
      show: 'boolean',
      tagCode: 'string',
      tagName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendInfos)) {
      $dara.Model.validateArray(this.extendInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanResponseBodyData extends $dara.Model {
  canApplyFreeOrder?: boolean;
  customerId?: string;
  docs?: ListEnterpriseSupportPlanResponseBodyDataDocs[];
  endTime?: string;
  firstPayTime?: string;
  freeOrderApplyCode?: string;
  freeOrderApplyId?: number;
  freeOrderApplyTime?: string;
  freeOrderApprovedTime?: string;
  freeOrderExpectStartTime?: string;
  gtspProjectId?: number;
  instanceId?: string;
  nodes?: ListEnterpriseSupportPlanResponseBodyDataNodes[];
  operateInfos?: ListEnterpriseSupportPlanResponseBodyDataOperateInfos[];
  orderIds?: number[];
  serviceName?: string;
  serviceStatus?: string;
  serviceStatusName?: string;
  serviceType?: string;
  sortTime?: string;
  startTime?: string;
  tags?: ListEnterpriseSupportPlanResponseBodyDataTags[];
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
      gtspProjectId: 'gtspProjectId',
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
      tags: 'tags',
      taskNum: 'taskNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canApplyFreeOrder: 'boolean',
      customerId: 'string',
      docs: { 'type': 'array', 'itemType': ListEnterpriseSupportPlanResponseBodyDataDocs },
      endTime: 'string',
      firstPayTime: 'string',
      freeOrderApplyCode: 'string',
      freeOrderApplyId: 'number',
      freeOrderApplyTime: 'string',
      freeOrderApprovedTime: 'string',
      freeOrderExpectStartTime: 'string',
      gtspProjectId: 'number',
      instanceId: 'string',
      nodes: { 'type': 'array', 'itemType': ListEnterpriseSupportPlanResponseBodyDataNodes },
      operateInfos: { 'type': 'array', 'itemType': ListEnterpriseSupportPlanResponseBodyDataOperateInfos },
      orderIds: { 'type': 'array', 'itemType': 'number' },
      serviceName: 'string',
      serviceStatus: 'string',
      serviceStatusName: 'string',
      serviceType: 'string',
      sortTime: 'string',
      startTime: 'string',
      tags: { 'type': 'array', 'itemType': ListEnterpriseSupportPlanResponseBodyDataTags },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseSupportPlanResponseBody extends $dara.Model {
  code?: string;
  data?: ListEnterpriseSupportPlanResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListEnterpriseSupportPlanResponseBodyData },
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


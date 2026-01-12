// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowResponseBodyDataHumanPose extends $dara.Model {
  bizUsage?: string;
  id?: number;
  name?: string;
  objectType?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      id: 'Id',
      name: 'Name',
      objectType: 'ObjectType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      id: 'number',
      name: 'string',
      objectType: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowResponseBodyDataMannequins extends $dara.Model {
  bizUsage?: string;
  id?: number;
  name?: string;
  objectType?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      id: 'Id',
      name: 'Name',
      objectType: 'ObjectType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      id: 'number',
      name: 'string',
      objectType: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowResponseBodyDataObject extends $dara.Model {
  bizUsage?: string;
  id?: number;
  name?: string;
  objectType?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      id: 'Id',
      name: 'Name',
      objectType: 'ObjectType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      id: 'number',
      name: 'string',
      objectType: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowResponseBodyDataObjectGeneration extends $dara.Model {
  bizUsage?: string;
  id?: number;
  name?: string;
  objectType?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      id: 'Id',
      name: 'Name',
      objectType: 'ObjectType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      id: 'number',
      name: 'string',
      objectType: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowResponseBodyDataScene extends $dara.Model {
  bizUsage?: string;
  id?: number;
  name?: string;
  objectType?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      id: 'Id',
      name: 'Name',
      objectType: 'ObjectType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      id: 'number',
      name: 'string',
      objectType: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowResponseBodyData extends $dara.Model {
  humanPose?: ListWorkflowResponseBodyDataHumanPose[];
  mannequins?: ListWorkflowResponseBodyDataMannequins[];
  object?: ListWorkflowResponseBodyDataObject[];
  objectGeneration?: ListWorkflowResponseBodyDataObjectGeneration[];
  scene?: ListWorkflowResponseBodyDataScene[];
  static names(): { [key: string]: string } {
    return {
      humanPose: 'HumanPose',
      mannequins: 'Mannequins',
      object: 'Object',
      objectGeneration: 'ObjectGeneration',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      humanPose: { 'type': 'array', 'itemType': ListWorkflowResponseBodyDataHumanPose },
      mannequins: { 'type': 'array', 'itemType': ListWorkflowResponseBodyDataMannequins },
      object: { 'type': 'array', 'itemType': ListWorkflowResponseBodyDataObject },
      objectGeneration: { 'type': 'array', 'itemType': ListWorkflowResponseBodyDataObjectGeneration },
      scene: { 'type': 'array', 'itemType': ListWorkflowResponseBodyDataScene },
    };
  }

  validate() {
    if(Array.isArray(this.humanPose)) {
      $dara.Model.validateArray(this.humanPose);
    }
    if(Array.isArray(this.mannequins)) {
      $dara.Model.validateArray(this.mannequins);
    }
    if(Array.isArray(this.object)) {
      $dara.Model.validateArray(this.object);
    }
    if(Array.isArray(this.objectGeneration)) {
      $dara.Model.validateArray(this.objectGeneration);
    }
    if(Array.isArray(this.scene)) {
      $dara.Model.validateArray(this.scene);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowResponseBody extends $dara.Model {
  data?: ListWorkflowResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListWorkflowResponseBodyData,
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


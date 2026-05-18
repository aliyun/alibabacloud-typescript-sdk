// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteMonitorResponseBodyCreateResultListCreateResultList extends $dara.Model {
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyCreateResultList extends $dara.Model {
  createResultList?: CreateSiteMonitorResponseBodyCreateResultListCreateResultList[];
  static names(): { [key: string]: string } {
    return {
      createResultList: 'CreateResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createResultList: { 'type': 'array', 'itemType': CreateSiteMonitorResponseBodyCreateResultListCreateResultList },
    };
  }

  validate() {
    if(Array.isArray(this.createResultList)) {
      $dara.Model.validateArray(this.createResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyDataAttachAlertResultContact extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  ruleId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      ruleId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyDataAttachAlertResult extends $dara.Model {
  contact?: CreateSiteMonitorResponseBodyDataAttachAlertResultContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': CreateSiteMonitorResponseBodyDataAttachAlertResultContact },
    };
  }

  validate() {
    if(Array.isArray(this.contact)) {
      $dara.Model.validateArray(this.contact);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyData extends $dara.Model {
  attachAlertResult?: CreateSiteMonitorResponseBodyDataAttachAlertResult;
  static names(): { [key: string]: string } {
    return {
      attachAlertResult: 'AttachAlertResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachAlertResult: CreateSiteMonitorResponseBodyDataAttachAlertResult,
    };
  }

  validate() {
    if(this.attachAlertResult && typeof (this.attachAlertResult as any).validate === 'function') {
      (this.attachAlertResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  createResultList?: CreateSiteMonitorResponseBodyCreateResultList;
  /**
   * @remarks
   * The result of the site monitoring task.
   */
  data?: CreateSiteMonitorResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68192f5d-0d45-4b98-9724-892813f86c71
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResultList: 'CreateResultList',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResultList: CreateSiteMonitorResponseBodyCreateResultList,
      data: CreateSiteMonitorResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.createResultList && typeof (this.createResultList as any).validate === 'function') {
      (this.createResultList as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


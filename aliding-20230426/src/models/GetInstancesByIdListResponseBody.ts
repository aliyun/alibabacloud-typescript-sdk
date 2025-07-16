// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstancesByIdListResponseBodyResultActionExecutorName extends $dara.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  /**
   * @example
   * i18n
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'NameInChinese',
      nameInEnglish: 'NameInEnglish',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesByIdListResponseBodyResultActionExecutor extends $dara.Model {
  /**
   * @example
   * 开发部
   */
  departmentName?: string;
  /**
   * @example
   * abc@alimail.com
   */
  email?: string;
  name?: GetInstancesByIdListResponseBodyResultActionExecutorName;
  /**
   * @example
   * manager123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      email: 'Email',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      email: 'string',
      name: GetInstancesByIdListResponseBodyResultActionExecutorName,
      userId: 'string',
    };
  }

  validate() {
    if(this.name && typeof (this.name as any).validate === 'function') {
      (this.name as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesByIdListResponseBodyResultOriginatorName extends $dara.Model {
  /**
   * @example
   * 张三
   */
  nameInChinese?: string;
  /**
   * @example
   * ZhangSan
   */
  nameInEnglish?: string;
  /**
   * @example
   * i18n
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'NameInChinese',
      nameInEnglish: 'NameInEnglish',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesByIdListResponseBodyResultOriginator extends $dara.Model {
  /**
   * @example
   * 开发部
   */
  departmentName?: string;
  /**
   * @example
   * abc@alimail.com
   */
  email?: string;
  name?: GetInstancesByIdListResponseBodyResultOriginatorName;
  /**
   * @example
   * manager123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      email: 'Email',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      email: 'string',
      name: GetInstancesByIdListResponseBodyResultOriginatorName,
      userId: 'string',
    };
  }

  validate() {
    if(this.name && typeof (this.name as any).validate === 'function') {
      (this.name as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesByIdListResponseBodyResult extends $dara.Model {
  actionExecutor?: GetInstancesByIdListResponseBodyResultActionExecutor[];
  /**
   * @example
   * agree
   */
  approvedResult?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3
   */
  formUuid?: string;
  /**
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  originator?: GetInstancesByIdListResponseBodyResultOriginator;
  /**
   * @example
   * TPROC--X1Gxxx
   */
  processCode?: string;
  /**
   * @example
   * f30233fb-72e1-4xxx
   */
  processInstanceId?: string;
  /**
   * @example
   * 李四发起的请购单
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      actionExecutor: 'ActionExecutor',
      approvedResult: 'ApprovedResult',
      data: 'Data',
      formUuid: 'FormUuid',
      instanceStatus: 'InstanceStatus',
      originator: 'Originator',
      processCode: 'ProcessCode',
      processInstanceId: 'ProcessInstanceId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionExecutor: { 'type': 'array', 'itemType': GetInstancesByIdListResponseBodyResultActionExecutor },
      approvedResult: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formUuid: 'string',
      instanceStatus: 'string',
      originator: GetInstancesByIdListResponseBodyResultOriginator,
      processCode: 'string',
      processInstanceId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionExecutor)) {
      $dara.Model.validateArray(this.actionExecutor);
    }
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    if(this.originator && typeof (this.originator as any).validate === 'function') {
      (this.originator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesByIdListResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: GetInstancesByIdListResponseBodyResult[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetInstancesByIdListResponseBodyResult },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


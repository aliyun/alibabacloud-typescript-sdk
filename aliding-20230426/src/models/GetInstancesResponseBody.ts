// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstancesResponseBodyDataActionExecutorName extends $dara.Model {
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

export class GetInstancesResponseBodyDataActionExecutor extends $dara.Model {
  /**
   * @example
   * 开发部
   */
  deptName?: string;
  /**
   * @example
   * abc@alimail.com
   */
  email?: string;
  name?: GetInstancesResponseBodyDataActionExecutorName;
  /**
   * @example
   * manager123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'DeptName',
      email: 'Email',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      email: 'string',
      name: GetInstancesResponseBodyDataActionExecutorName,
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

export class GetInstancesResponseBodyDataOriginatorName extends $dara.Model {
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

export class GetInstancesResponseBodyDataOriginator extends $dara.Model {
  /**
   * @example
   * 开发部
   */
  deptName?: string;
  /**
   * @example
   * abc@alimail.com
   */
  email?: string;
  name?: GetInstancesResponseBodyDataOriginatorName;
  /**
   * @example
   * manager123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'DeptName',
      email: 'Email',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      email: 'string',
      name: GetInstancesResponseBodyDataOriginatorName,
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

export class GetInstancesResponseBodyData extends $dara.Model {
  actionExecutor?: GetInstancesResponseBodyDataActionExecutor[];
  /**
   * @example
   * agree
   */
  approvedResult?: string;
  /**
   * @example
   * 2021-05-01
   */
  createTimeGMT?: string;
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
  /**
   * @example
   * 2021-05-01
   */
  modifiedTimeGMT?: string;
  originator?: GetInstancesResponseBodyDataOriginator;
  /**
   * @example
   * TPROC--X1Gxxx
   */
  processCode?: string;
  /**
   * @example
   * f30233fb-72e1-4af4-8cb8-c7e0ea9ee530
   */
  processInstanceId?: string;
  /**
   * @example
   * 小红发起的请购单
   */
  title?: string;
  /**
   * @example
   * 1.0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      actionExecutor: 'ActionExecutor',
      approvedResult: 'ApprovedResult',
      createTimeGMT: 'CreateTimeGMT',
      data: 'Data',
      formUuid: 'FormUuid',
      instanceStatus: 'InstanceStatus',
      modifiedTimeGMT: 'ModifiedTimeGMT',
      originator: 'Originator',
      processCode: 'ProcessCode',
      processInstanceId: 'ProcessInstanceId',
      title: 'Title',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionExecutor: { 'type': 'array', 'itemType': GetInstancesResponseBodyDataActionExecutor },
      approvedResult: 'string',
      createTimeGMT: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formUuid: 'string',
      instanceStatus: 'string',
      modifiedTimeGMT: 'string',
      originator: GetInstancesResponseBodyDataOriginator,
      processCode: 'string',
      processInstanceId: 'string',
      title: 'string',
      version: 'number',
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

export class GetInstancesResponseBody extends $dara.Model {
  data?: GetInstancesResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
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
      data: 'data',
      pageNumber: 'pageNumber',
      requestId: 'requestId',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetInstancesResponseBodyData },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
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


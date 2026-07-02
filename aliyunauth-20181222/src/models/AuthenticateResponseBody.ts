// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuthenticateResponseBodyDataUserInputListQueryAuthRSDTO extends $dara.Model {
  content?: string;
  expandContent?: string;
  fieldName?: string;
  fieldVid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      expandContent: 'ExpandContent',
      fieldName: 'FieldName',
      fieldVid: 'FieldVid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      expandContent: 'string',
      fieldName: 'string',
      fieldVid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthenticateResponseBodyDataUserInputList extends $dara.Model {
  queryAuthRSDTO?: AuthenticateResponseBodyDataUserInputListQueryAuthRSDTO[];
  static names(): { [key: string]: string } {
    return {
      queryAuthRSDTO: 'QueryAuthRSDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryAuthRSDTO: { 'type': 'array', 'itemType': AuthenticateResponseBodyDataUserInputListQueryAuthRSDTO },
    };
  }

  validate() {
    if(Array.isArray(this.queryAuthRSDTO)) {
      $dara.Model.validateArray(this.queryAuthRSDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthenticateResponseBodyData extends $dara.Model {
  authorized?: boolean;
  instanceId?: string;
  operateCode?: string;
  productCode?: string;
  recordVid?: string;
  userInputList?: AuthenticateResponseBodyDataUserInputList;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      instanceId: 'InstanceId',
      operateCode: 'OperateCode',
      productCode: 'ProductCode',
      recordVid: 'RecordVid',
      userInputList: 'UserInputList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      instanceId: 'string',
      operateCode: 'string',
      productCode: 'string',
      recordVid: 'string',
      userInputList: AuthenticateResponseBodyDataUserInputList,
    };
  }

  validate() {
    if(this.userInputList && typeof (this.userInputList as any).validate === 'function') {
      (this.userInputList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthenticateResponseBody extends $dara.Model {
  code?: number;
  data?: AuthenticateResponseBodyData;
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
      data: AuthenticateResponseBodyData,
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


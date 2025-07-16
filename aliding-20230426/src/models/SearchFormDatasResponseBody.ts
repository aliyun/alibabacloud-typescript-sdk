// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFormDatasResponseBodyDataModifyUserUserName extends $dara.Model {
  nameInChinese?: string;
  /**
   * @example
   * EngilishName
   */
  nameInEnglish?: string;
  /**
   * @example
   * ZH-CN
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

export class SearchFormDatasResponseBodyDataModifyUser extends $dara.Model {
  /**
   * @example
   * 012345
   */
  userId?: string;
  userName?: SearchFormDatasResponseBodyDataModifyUserUserName;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: SearchFormDatasResponseBodyDataModifyUserUserName,
    };
  }

  validate() {
    if(this.userName && typeof (this.userName as any).validate === 'function') {
      (this.userName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDatasResponseBodyDataOriginatorUserName extends $dara.Model {
  nameInChinese?: string;
  /**
   * @example
   * EngilishName
   */
  nameInEnglish?: string;
  /**
   * @example
   * ZH-CN
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

export class SearchFormDatasResponseBodyDataOriginator extends $dara.Model {
  /**
   * @example
   * 012345
   */
  userId?: string;
  userName?: SearchFormDatasResponseBodyDataOriginatorUserName;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: SearchFormDatasResponseBodyDataOriginatorUserName,
    };
  }

  validate() {
    if(this.userName && typeof (this.userName as any).validate === 'function') {
      (this.userName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFormDatasResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2018-01-24 11:22:01
   */
  createdTimeGMT?: string;
  /**
   * @example
   * 012345
   */
  creatorUserId?: string;
  /**
   * @example
   * 1002
   */
  dataId?: number;
  formData?: { [key: string]: any };
  /**
   * @example
   * FINST-BNKJDRF
   */
  formInstanceId?: string;
  /**
   * @example
   * FORM-EF6Y93URN24F1SCX15VA2P918LPEIJ2H3UFORCJ1
   */
  formUuid?: string;
  /**
   * @example
   * {}
   */
  instanceValue?: string;
  /**
   * @example
   * FORM-EF6Y93URN24F1SCX15VA2P918LPEIJ2H3UFORCJ1
   */
  modelUuid?: string;
  /**
   * @example
   * 2018-01-24 11:22:01
   */
  modifiedTimeGMT?: string;
  /**
   * @example
   * 012345
   */
  modifierUserId?: string;
  modifyUser?: SearchFormDatasResponseBodyDataModifyUser;
  originator?: SearchFormDatasResponseBodyDataOriginator;
  /**
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @example
   * 231008101012015353
   */
  serialNo?: string;
  title?: string;
  /**
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createdTimeGMT: 'CreatedTimeGMT',
      creatorUserId: 'CreatorUserId',
      dataId: 'DataId',
      formData: 'FormData',
      formInstanceId: 'FormInstanceId',
      formUuid: 'FormUuid',
      instanceValue: 'InstanceValue',
      modelUuid: 'ModelUuid',
      modifiedTimeGMT: 'ModifiedTimeGMT',
      modifierUserId: 'ModifierUserId',
      modifyUser: 'ModifyUser',
      originator: 'Originator',
      sequence: 'Sequence',
      serialNo: 'SerialNo',
      title: 'Title',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTimeGMT: 'string',
      creatorUserId: 'string',
      dataId: 'number',
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formInstanceId: 'string',
      formUuid: 'string',
      instanceValue: 'string',
      modelUuid: 'string',
      modifiedTimeGMT: 'string',
      modifierUserId: 'string',
      modifyUser: SearchFormDatasResponseBodyDataModifyUser,
      originator: SearchFormDatasResponseBodyDataOriginator,
      sequence: 'string',
      serialNo: 'string',
      title: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.formData) {
      $dara.Model.validateMap(this.formData);
    }
    if(this.modifyUser && typeof (this.modifyUser as any).validate === 'function') {
      (this.modifyUser as any).validate();
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

export class SearchFormDatasResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: SearchFormDatasResponseBodyData[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 20
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
      currentPage: 'currentPage',
      data: 'data',
      requestId: 'requestId',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': SearchFormDatasResponseBodyData },
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


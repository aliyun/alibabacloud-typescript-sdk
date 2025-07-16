// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetFormDataByIdListResponseBodyResultModifyUserName extends $dara.Model {
  nameInChinese?: string;
  /**
   * @example
   * EnglishName
   */
  nameInEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'NameInChinese',
      nameInEnglish: 'NameInEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFormDataByIdListResponseBodyResultModifyUser extends $dara.Model {
  name?: BatchGetFormDataByIdListResponseBodyResultModifyUserName;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: BatchGetFormDataByIdListResponseBodyResultModifyUserName,
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

export class BatchGetFormDataByIdListResponseBodyResultOriginatorName extends $dara.Model {
  nameInChinese?: string;
  /**
   * @example
   * EnglishName
   */
  nameInEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'NameInChinese',
      nameInEnglish: 'NameInEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFormDataByIdListResponseBodyResultOriginator extends $dara.Model {
  name?: BatchGetFormDataByIdListResponseBodyResultOriginatorName;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: BatchGetFormDataByIdListResponseBodyResultOriginatorName,
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

export class BatchGetFormDataByIdListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2021-05-01 10:10:10
   */
  createTimeGMT?: string;
  /**
   * @example
   * 012345
   */
  creatorUserId?: string;
  formData?: { [key: string]: any };
  /**
   * @example
   * FINST-xxxx
   */
  formInstanceId?: string;
  /**
   * @example
   * FORM-xxxx
   */
  formUuid?: string;
  /**
   * @example
   * 21044829126
   */
  id?: number;
  /**
   * @example
   * {}
   */
  instanceValue?: string;
  /**
   * @example
   * 2021-05-01 10:10:10
   */
  modifiedTimeGMT?: string;
  modifier?: string;
  modifyUser?: BatchGetFormDataByIdListResponseBodyResultModifyUser;
  originator?: BatchGetFormDataByIdListResponseBodyResultOriginator;
  /**
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @example
   * SA65776
   */
  serialNumber?: string;
  title?: string;
  /**
   * @example
   * 2
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeGMT: 'CreateTimeGMT',
      creatorUserId: 'CreatorUserId',
      formData: 'FormData',
      formInstanceId: 'FormInstanceId',
      formUuid: 'FormUuid',
      id: 'Id',
      instanceValue: 'InstanceValue',
      modifiedTimeGMT: 'ModifiedTimeGMT',
      modifier: 'Modifier',
      modifyUser: 'ModifyUser',
      originator: 'Originator',
      sequence: 'Sequence',
      serialNumber: 'SerialNumber',
      title: 'Title',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeGMT: 'string',
      creatorUserId: 'string',
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formInstanceId: 'string',
      formUuid: 'string',
      id: 'number',
      instanceValue: 'string',
      modifiedTimeGMT: 'string',
      modifier: 'string',
      modifyUser: BatchGetFormDataByIdListResponseBodyResultModifyUser,
      originator: BatchGetFormDataByIdListResponseBodyResultOriginator,
      sequence: 'string',
      serialNumber: 'string',
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

export class BatchGetFormDataByIdListResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * [ "FINST-SASNOO39NSIFF780" ]
   */
  result?: BatchGetFormDataByIdListResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': BatchGetFormDataByIdListResponseBodyResult },
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


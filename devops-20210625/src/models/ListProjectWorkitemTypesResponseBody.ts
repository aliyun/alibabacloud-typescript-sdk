// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectWorkitemTypesResponseBodyWorkitemTypes extends $dara.Model {
  /**
   * @example
   * 用户阿里云pk，例如19xxxx31947xxxx
   */
  addUser?: string;
  /**
   * @example
   * Req
   */
  categoryIdentifier?: string;
  /**
   * @example
   * 用户阿里云pk，例如19xxxx31947xxxx
   */
  creator?: string;
  /**
   * @example
   * true或者false
   */
  defaultType?: boolean;
  /**
   * @example
   * 该类型的具体信息
   */
  description?: string;
  /**
   * @example
   * true或者false
   */
  enable?: boolean;
  /**
   * @example
   * 1641870287000
   */
  gmtAdd?: number;
  /**
   * @example
   * 1620455467000
   */
  gmtCreate?: number;
  /**
   * @example
   * dfexxxxxf4fee18xxxxx36
   */
  identifier?: string;
  /**
   * @example
   * 例：业务类需求
   */
  name?: string;
  /**
   * @example
   * 例：Business Requirement
   */
  nameEn?: string;
  /**
   * @example
   * true
   */
  systemDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      addUser: 'addUser',
      categoryIdentifier: 'categoryIdentifier',
      creator: 'creator',
      defaultType: 'defaultType',
      description: 'description',
      enable: 'enable',
      gmtAdd: 'gmtAdd',
      gmtCreate: 'gmtCreate',
      identifier: 'identifier',
      name: 'name',
      nameEn: 'nameEn',
      systemDefault: 'systemDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addUser: 'string',
      categoryIdentifier: 'string',
      creator: 'string',
      defaultType: 'boolean',
      description: 'string',
      enable: 'boolean',
      gmtAdd: 'number',
      gmtCreate: 'number',
      identifier: 'string',
      name: 'string',
      nameEn: 'string',
      systemDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectWorkitemTypesResponseBody extends $dara.Model {
  /**
   * @example
   * 例：Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * errormessage
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true或者false
   */
  success?: boolean;
  workitemTypes?: ListProjectWorkitemTypesResponseBodyWorkitemTypes[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      workitemTypes: 'workitemTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workitemTypes: { 'type': 'array', 'itemType': ListProjectWorkitemTypesResponseBodyWorkitemTypes },
    };
  }

  validate() {
    if(Array.isArray(this.workitemTypes)) {
      $dara.Model.validateArray(this.workitemTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


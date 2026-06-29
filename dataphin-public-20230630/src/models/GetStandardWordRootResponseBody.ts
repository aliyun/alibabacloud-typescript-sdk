// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardWordRootResponseBodyWordRootInfo extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the word root.
   * 
   * @example
   * avg
   */
  abbreviation?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 30012021
   */
  creator?: string;
  /**
   * @remarks
   * The username of the creator.
   * 
   * @example
   * test
   */
  creatorName?: string;
  /**
   * @remarks
   * The description of the word root.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The full name of the word root.
   * 
   * @example
   * average
   */
  fullName?: string;
  /**
   * @remarks
   * The user ID of the last modifier.
   * 
   * @example
   * 30012021
   */
  lastModifier?: string;
  /**
   * @remarks
   * The username of the last modifier.
   * 
   * @example
   * test
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the word root.
   * 
   * @example
   * 平均值
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      fullName: 'FullName',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      modifyTime: 'ModifyTime',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      fullName: 'string',
      lastModifier: 'string',
      lastModifierName: 'string',
      modifyTime: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardWordRootResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The word root details.
   */
  wordRootInfo?: GetStandardWordRootResponseBodyWordRootInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      wordRootInfo: 'WordRootInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      wordRootInfo: GetStandardWordRootResponseBodyWordRootInfo,
    };
  }

  validate() {
    if(this.wordRootInfo && typeof (this.wordRootInfo as any).validate === 'function') {
      (this.wordRootInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMergeRequestFilesReadsResponseBodyResultReadUsers extends $dara.Model {
  /**
   * @example
   * 204485087002425236
   */
  aliyunPk?: string;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * codeup
   */
  name?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * test-codeup
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
      avatarUrl: 'avatarUrl',
      email: 'email',
      name: 'name',
      state: 'state',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      avatarUrl: 'string',
      email: 'string',
      name: 'string',
      state: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestFilesReadsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  deletedFile?: string;
  /**
   * @example
   * true
   */
  newFile?: boolean;
  /**
   * @example
   * text.txt
   */
  newFilePath?: string;
  /**
   * @example
   * text.txt
   */
  oldFilePath?: string;
  readUsers?: ListMergeRequestFilesReadsResponseBodyResultReadUsers[];
  /**
   * @example
   * false
   */
  renamedFile?: string;
  static names(): { [key: string]: string } {
    return {
      deletedFile: 'deletedFile',
      newFile: 'newFile',
      newFilePath: 'newFilePath',
      oldFilePath: 'oldFilePath',
      readUsers: 'readUsers',
      renamedFile: 'renamedFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedFile: 'string',
      newFile: 'boolean',
      newFilePath: 'string',
      oldFilePath: 'string',
      readUsers: { 'type': 'array', 'itemType': ListMergeRequestFilesReadsResponseBodyResultReadUsers },
      renamedFile: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.readUsers)) {
      $dara.Model.validateArray(this.readUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestFilesReadsResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: ListMergeRequestFilesReadsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListMergeRequestFilesReadsResponseBodyResult },
      success: 'boolean',
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


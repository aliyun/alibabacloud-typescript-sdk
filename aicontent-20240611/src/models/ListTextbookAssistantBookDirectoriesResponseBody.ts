// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic extends $dara.Model {
  /**
   * @example
   * 1323
   */
  labelId?: string;
  labelName?: string;
  static names(): { [key: string]: string } {
    return {
      labelId: 'labelId',
      labelName: 'labelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelId: 'string',
      labelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSectionTopic extends $dara.Model {
  labelId?: string;
  labelName?: string;
  static names(): { [key: string]: string } {
    return {
      labelId: 'labelId',
      labelName: 'labelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelId: 'string',
      labelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSection extends $dara.Model {
  children?: any;
  directoryId?: string;
  directoryName?: string;
  topic?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSectionTopic[];
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      directoryId: 'directoryId',
      directoryName: 'directoryName',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: 'any',
      directoryId: 'string',
      directoryName: 'string',
      topic: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSectionTopic },
    };
  }

  validate() {
    if(Array.isArray(this.topic)) {
      $dara.Model.validateArray(this.topic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitTopic extends $dara.Model {
  labelId?: string;
  labelName?: string;
  static names(): { [key: string]: string } {
    return {
      labelId: 'labelId',
      labelName: 'labelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelId: 'string',
      labelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnit extends $dara.Model {
  directoryId?: string;
  directoryName?: string;
  section?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSection[];
  topic?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitTopic[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      directoryName: 'directoryName',
      section: 'section',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      directoryName: 'string',
      section: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSection },
      topic: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitTopic },
    };
  }

  validate() {
    if(Array.isArray(this.section)) {
      $dara.Model.validateArray(this.section);
    }
    if(Array.isArray(this.topic)) {
      $dara.Model.validateArray(this.topic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree extends $dara.Model {
  /**
   * @example
   * 05758807ed8e11eebe6e0c42a106bb02
   */
  directoryId?: string;
  /**
   * @example
   * 2 Jobs
   */
  directoryName?: string;
  topic?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic[];
  unit?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnit[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      directoryName: 'directoryName',
      topic: 'topic',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      directoryName: 'string',
      topic: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic },
      unit: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnit },
    };
  }

  validate() {
    if(Array.isArray(this.topic)) {
      $dara.Model.validateArray(this.topic);
    }
    if(Array.isArray(this.unit)) {
      $dara.Model.validateArray(this.unit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo extends $dara.Model {
  /**
   * @example
   * 55857
   */
  bookId?: string;
  /**
   * @example
   * 1
   */
  bookVolume?: string;
  /**
   * @example
   * 2010-1(2)
   */
  edition?: string;
  /**
   * @example
   * 3
   */
  grade?: string;
  /**
   * @example
   * 2019-1(10)
   */
  impression?: string;
  /**
   * @example
   * 9787544413695
   */
  isbn?: string;
  publisher?: string;
  /**
   * @example
   * ENGLISH
   */
  subject?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bookId: 'bookId',
      bookVolume: 'bookVolume',
      edition: 'edition',
      grade: 'grade',
      impression: 'impression',
      isbn: 'isbn',
      publisher: 'publisher',
      subject: 'subject',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookId: 'string',
      bookVolume: 'string',
      edition: 'string',
      grade: 'string',
      impression: 'string',
      isbn: 'string',
      publisher: 'string',
      subject: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyData extends $dara.Model {
  directoryTree?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree[];
  editionInfo?: ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo;
  static names(): { [key: string]: string } {
    return {
      directoryTree: 'directoryTree',
      editionInfo: 'editionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryTree: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree },
      editionInfo: ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo,
    };
  }

  validate() {
    if(Array.isArray(this.directoryTree)) {
      $dara.Model.validateArray(this.directoryTree);
    }
    if(this.editionInfo && typeof (this.editionInfo as any).validate === 'function') {
      (this.editionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBody extends $dara.Model {
  data?: ListTextbookAssistantBookDirectoriesResponseBodyData;
  /**
   * @example
   * B_USER_NOT_FOUND_EXCEPTION
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0A5E9849-A2F0-551D-A7D8-1A8118557BAB
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTextbookAssistantBookDirectoriesResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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


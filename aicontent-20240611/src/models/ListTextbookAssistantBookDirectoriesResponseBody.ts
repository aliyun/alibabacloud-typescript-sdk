// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic extends $dara.Model {
  /**
   * @remarks
   * The label ID.
   * 
   * @example
   * 1323
   */
  labelId?: string;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * 身边事物环境
   */
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
  /**
   * @remarks
   * The label ID.
   * 
   * @example
   * 1329
   */
  labelId?: string;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * 自我介绍
   */
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
  /**
   * @remarks
   * Child nodes for backward compatibility. This property is optional.
   * 
   * @example
   * 可能存在的子元素，兼容数据使用，不一定存在
   */
  children?: any;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * 05758807ed8e11eebe6e0c42a106bb02
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * section 2
   */
  directoryName?: string;
  /**
   * @remarks
   * The topic.
   */
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
  /**
   * @remarks
   * The label ID.
   * 
   * @example
   * 1326
   */
  labelId?: string;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * 自我介绍
   */
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
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * 05758807ed8e11eebe6e0c42a106bb02
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * unit 2
   */
  directoryName?: string;
  /**
   * @remarks
   * The section.
   */
  section?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSection[];
  /**
   * @remarks
   * The topic.
   */
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
   * @remarks
   * The directory ID.
   * 
   * @example
   * 05758807ed8e11eebe6e0c42a106bb02
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * 2 Jobs
   */
  directoryName?: string;
  /**
   * @remarks
   * The topic.
   */
  topic?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic[];
  /**
   * @remarks
   * The unit.
   */
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
   * @remarks
   * The book ID.
   * 
   * @example
   * 55857
   */
  bookId?: string;
  /**
   * @remarks
   * The book volume. `0` indicates a single-volume edition, `1` indicates Volume 1, and `2` indicates Volume 2.
   * 
   * @example
   * 1
   */
  bookVolume?: string;
  /**
   * @remarks
   * The edition.
   * 
   * @example
   * 2010-1(2)
   */
  edition?: string;
  /**
   * @remarks
   * The grade. Valid values: 1–9.
   * 
   * @example
   * 3
   */
  grade?: string;
  /**
   * @remarks
   * The impression.
   * 
   * @example
   * 2019-1(10)
   */
  impression?: string;
  /**
   * @remarks
   * The International Standard Book Number (ISBN).
   * 
   * @example
   * 9787544413695
   */
  isbn?: string;
  /**
   * @remarks
   * The publisher.
   * 
   * @example
   * 人民教育出版社
   */
  publisher?: string;
  /**
   * @remarks
   * The subject.
   * 
   * @example
   * ENGLISH
   */
  subject?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 人教版
   */
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
  /**
   * @remarks
   * The directory tree.
   */
  directoryTree?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree[];
  /**
   * @remarks
   * The edition details.
   */
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
  /**
   * @remarks
   * The data object.
   */
  data?: ListTextbookAssistantBookDirectoriesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * B_USER_NOT_FOUND_EXCEPTION
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 用户不存在
   */
  errMessage?: string;
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
   * The request ID.
   * 
   * @example
   * 0A5E9849-A2F0-551D-A7D8-1A8118557BAB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
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


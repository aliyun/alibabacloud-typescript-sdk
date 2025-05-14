// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDentryResponseBodyCreator } from "./QueryDentryResponseBodyCreator";
import { QueryDentryResponseBodyLinkSourceInfo } from "./QueryDentryResponseBodyLinkSourceInfo";
import { QueryDentryResponseBodySpace } from "./QueryDentryResponseBodySpace";
import { QueryDentryResponseBodyUpdater } from "./QueryDentryResponseBodyUpdater";
import { QueryDentryResponseBodyVisitorInfo } from "./QueryDentryResponseBodyVisitorInfo";


export class QueryDentryResponseBody extends $dara.Model {
  /**
   * @example
   * alidoc
   */
  contentType?: string;
  /**
   * @example
   * 12345678
   */
  createdTime?: number;
  creator?: QueryDentryResponseBodyCreator;
  /**
   * @example
   * abc
   */
  dentryId?: string;
  /**
   * @example
   * file
   */
  dentryType?: string;
  /**
   * @example
   * cdefg
   */
  dentryUuid?: string;
  /**
   * @example
   * aabbcc
   */
  docKey?: string;
  /**
   * @example
   * alidoc
   */
  extension?: string;
  /**
   * @example
   * false
   */
  hasChildren?: boolean;
  linkSourceInfo?: QueryDentryResponseBodyLinkSourceInfo;
  /**
   * @example
   * hello
   */
  name?: string;
  /**
   * @example
   * 测试组织/测试知识库/abc
   */
  path?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  space?: QueryDentryResponseBodySpace;
  /**
   * @example
   * bcd
   */
  spaceId?: string;
  /**
   * @example
   * 12345678
   */
  updatedTime?: number;
  updater?: QueryDentryResponseBodyUpdater;
  /**
   * @example
   * https://xxx.yy
   */
  url?: string;
  visitorInfo?: QueryDentryResponseBodyVisitorInfo;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      createdTime: 'createdTime',
      creator: 'creator',
      dentryId: 'dentryId',
      dentryType: 'dentryType',
      dentryUuid: 'dentryUuid',
      docKey: 'docKey',
      extension: 'extension',
      hasChildren: 'hasChildren',
      linkSourceInfo: 'linkSourceInfo',
      name: 'name',
      path: 'path',
      requestId: 'requestId',
      space: 'space',
      spaceId: 'spaceId',
      updatedTime: 'updatedTime',
      updater: 'updater',
      url: 'url',
      visitorInfo: 'visitorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      createdTime: 'number',
      creator: QueryDentryResponseBodyCreator,
      dentryId: 'string',
      dentryType: 'string',
      dentryUuid: 'string',
      docKey: 'string',
      extension: 'string',
      hasChildren: 'boolean',
      linkSourceInfo: QueryDentryResponseBodyLinkSourceInfo,
      name: 'string',
      path: 'string',
      requestId: 'string',
      space: QueryDentryResponseBodySpace,
      spaceId: 'string',
      updatedTime: 'number',
      updater: QueryDentryResponseBodyUpdater,
      url: 'string',
      visitorInfo: QueryDentryResponseBodyVisitorInfo,
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.linkSourceInfo && typeof (this.linkSourceInfo as any).validate === 'function') {
      (this.linkSourceInfo as any).validate();
    }
    if(this.space && typeof (this.space as any).validate === 'function') {
      (this.space as any).validate();
    }
    if(this.updater && typeof (this.updater as any).validate === 'function') {
      (this.updater as any).validate();
    }
    if(this.visitorInfo && typeof (this.visitorInfo as any).validate === 'function') {
      (this.visitorInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


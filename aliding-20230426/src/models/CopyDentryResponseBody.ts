// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CopyDentryResponseBodyLinkSourceInfo } from "./CopyDentryResponseBodyLinkSourceInfo";
import { CopyDentryResponseBodySpace } from "./CopyDentryResponseBodySpace";


export class CopyDentryResponseBody extends $dara.Model {
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
  creator?: { [key: string]: any };
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
  linkSourceInfo?: CopyDentryResponseBodyLinkSourceInfo;
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
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  space?: CopyDentryResponseBodySpace;
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
  /**
   * @example
   * {\\"UserId\\": \\"353851\\", \\"Name\\": u\\"\\u848b\\u7fbd\\u4e2d\\"}
   */
  updater?: { [key: string]: any };
  /**
   * @example
   * https://xxx.yy
   */
  url?: string;
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
  visitorInfo?: { [key: string]: any };
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
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
      visitorInfo: 'visitorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      createdTime: 'number',
      creator: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dentryId: 'string',
      dentryType: 'string',
      dentryUuid: 'string',
      docKey: 'string',
      extension: 'string',
      hasChildren: 'boolean',
      linkSourceInfo: CopyDentryResponseBodyLinkSourceInfo,
      name: 'string',
      path: 'string',
      requestId: 'string',
      space: CopyDentryResponseBodySpace,
      spaceId: 'string',
      updatedTime: 'number',
      updater: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      url: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
      visitorInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.creator) {
      $dara.Model.validateMap(this.creator);
    }
    if(this.linkSourceInfo && typeof (this.linkSourceInfo as any).validate === 'function') {
      (this.linkSourceInfo as any).validate();
    }
    if(this.space && typeof (this.space as any).validate === 'function') {
      (this.space as any).validate();
    }
    if(this.updater) {
      $dara.Model.validateMap(this.updater);
    }
    if(this.visitorInfo) {
      $dara.Model.validateMap(this.visitorInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


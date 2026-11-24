// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanAdditionalListsResponseBodyAdditionalListsListsListDetail extends $dara.Model {
  /**
   * @remarks
   * The creation time of the list entry. The time is in the yyyy-MM-dd HH:mm:ss format and uses the UTC+8 time zone.
   * 
   * @example
   * 2026-08-21 10:24:31
   */
  createTime?: string;
  /**
   * @remarks
   * The content of the list entry. The meaning is determined by the AdditionalType to which it belongs.
   * 
   * @example
   * .tmp
   */
  detail?: string;
  /**
   * @remarks
   * The ID of the list entry.
   * 
   * @example
   * additional-list-4d7b1e9a6c38****
   */
  listId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      detail: 'Detail',
      listId: 'ListId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      detail: 'string',
      listId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanAdditionalListsResponseBodyAdditionalListsLists extends $dara.Model {
  /**
   * @remarks
   * The list of list entries.
   */
  listDetail?: ListVirusScanAdditionalListsResponseBodyAdditionalListsListsListDetail[];
  /**
   * @remarks
   * The list type. Valid values:
   * - **Blacklist**: Blacklist. Matched files are directly identified as virus files.
   * - **Whitelist**: Whitelist. Matched files are excluded from virus detection.
   * 
   * @example
   * Whitelist
   */
  listType?: string;
  static names(): { [key: string]: string } {
    return {
      listDetail: 'ListDetail',
      listType: 'ListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listDetail: { 'type': 'array', 'itemType': ListVirusScanAdditionalListsResponseBodyAdditionalListsListsListDetail },
      listType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listDetail)) {
      $dara.Model.validateArray(this.listDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanAdditionalListsResponseBodyAdditionalLists extends $dara.Model {
  /**
   * @remarks
   * The match dimension of the list entry. Valid values:
   * - **FileSuffix**: Matches by file name extension.
   * - **FileName**: Matches by file name.
   * - **FolderName**: Matches by folder name.
   * - **FilePath**: Matches by file path.
   * - **FileMd5**: Matches by file MD5 value.
   * 
   * @example
   * FileSuffix
   */
  additionalType?: string;
  /**
   * @remarks
   * The lists grouped by list type under the match dimension.
   */
  lists?: ListVirusScanAdditionalListsResponseBodyAdditionalListsLists[];
  static names(): { [key: string]: string } {
    return {
      additionalType: 'AdditionalType',
      lists: 'Lists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalType: 'string',
      lists: { 'type': 'array', 'itemType': ListVirusScanAdditionalListsResponseBodyAdditionalListsLists },
    };
  }

  validate() {
    if(Array.isArray(this.lists)) {
      $dara.Model.validateArray(this.lists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanAdditionalListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of blacklists and whitelists grouped by match dimension. If a match dimension does not contain any list entries, the dimension is not included in the list.
   */
  additionalLists?: ListVirusScanAdditionalListsResponseBodyAdditionalLists[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalLists: 'AdditionalLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalLists: { 'type': 'array', 'itemType': ListVirusScanAdditionalListsResponseBodyAdditionalLists },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalLists)) {
      $dara.Model.validateArray(this.additionalLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


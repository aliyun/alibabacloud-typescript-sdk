// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanAdditionalListsResponseBodyAdditionalListsListsListDetail extends $dara.Model {
  /**
   * @example
   * 2026-08-21 10:24:31
   */
  createTime?: string;
  /**
   * @example
   * .tmp
   */
  detail?: string;
  /**
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
  listDetail?: ListVirusScanAdditionalListsResponseBodyAdditionalListsListsListDetail[];
  /**
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
   * @example
   * FileSuffix
   */
  additionalType?: string;
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
  additionalLists?: ListVirusScanAdditionalListsResponseBodyAdditionalLists[];
  /**
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


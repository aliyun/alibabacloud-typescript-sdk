// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The time when the namespace was created.
   * 
   * @example
   * 2022-07-11T09:32:03+08:00
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * Default project, auto-created by EMR.
   */
  description?: string;
  ipWhitelist?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * magic:magic-cn-1us4sed5d01
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * 76d4b6e4-31bf-475a-8710-6217ec049c1f
   */
  namespaceId?: string;
  /**
   * @remarks
   * The number of prompts in the namespace.
   * 
   * @example
   * 1
   */
  promptCount?: number;
  publicAccessEnabled?: boolean;
  publicDomain?: string;
  /**
   * @remarks
   * The number of skills in the namespace.
   * 
   * @example
   * 1
   */
  skillCount?: number;
  /**
   * @remarks
   * The source of the namespace.
   * 
   * @example
   * magic:magic-cn-fpi4secsq01
   */
  source?: string;
  /**
   * @remarks
   * The source index of the namespace.
   * 
   * @example
   * 0
   */
  sourceIndex?: number;
  /**
   * @remarks
   * The tags of the namespace.
   * 
   * @example
   * qa,test
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      ipWhitelist: 'IpWhitelist',
      name: 'Name',
      namespaceId: 'NamespaceId',
      promptCount: 'PromptCount',
      publicAccessEnabled: 'PublicAccessEnabled',
      publicDomain: 'PublicDomain',
      skillCount: 'SkillCount',
      source: 'Source',
      sourceIndex: 'SourceIndex',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      ipWhitelist: 'string',
      name: 'string',
      namespaceId: 'string',
      promptCount: 'number',
      publicAccessEnabled: 'boolean',
      publicDomain: 'string',
      skillCount: 'number',
      source: 'string',
      sourceIndex: 'number',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned data entries.
   */
  items?: ListNamespacesResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListNamespacesResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The namespace query result.
   */
  data?: ListNamespacesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9E87E66-9EF0-5C10-A5E6-924020A0C9B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListNamespacesResponseBodyData,
      requestId: 'string',
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


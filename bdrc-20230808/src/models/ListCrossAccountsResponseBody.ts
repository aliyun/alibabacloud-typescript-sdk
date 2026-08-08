// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrossAccountsResponseBodyDataContent extends $dara.Model {
  /**
   * @example
   * 1773738311
   */
  createdTime?: number;
  /**
   * @example
   * MANUAL
   */
  managementMode?: string;
  /**
   * @example
   * r-***
   */
  parentTargetId?: string;
  /**
   * @example
   * 123***7890
   */
  targetId?: string;
  /**
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      managementMode: 'ManagementMode',
      parentTargetId: 'ParentTargetId',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      managementMode: 'string',
      parentTargetId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrossAccountsResponseBodyData extends $dara.Model {
  content?: ListCrossAccountsResponseBodyDataContent[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * eKDyCM0zFQ5op7jVMWmNNA==
   */
  nextToken?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListCrossAccountsResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrossAccountsResponseBody extends $dara.Model {
  data?: ListCrossAccountsResponseBodyData;
  /**
   * @example
   * 5B2F09BF-CEBD-5A7E-AC01-E7F86169A5E5
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
      data: ListCrossAccountsResponseBodyData,
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


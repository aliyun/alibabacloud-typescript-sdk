// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLgfResponseBodyLgfs extends $dara.Model {
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 256756734345
   */
  intentId?: number;
  /**
   * @remarks
   * LGF ID
   * 
   * @example
   * 123
   */
  lgfId?: number;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  ruleText?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      intentId: 'IntentId',
      lgfId: 'LgfId',
      modifyTime: 'ModifyTime',
      ruleText: 'RuleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      intentId: 'number',
      lgfId: 'number',
      modifyTime: 'string',
      ruleText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLgfResponseBody extends $dara.Model {
  lgfs?: ListLgfResponseBodyLgfs[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 34fg57h2gh5783
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lgfs: 'Lgfs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lgfs: { 'type': 'array', 'itemType': ListLgfResponseBodyLgfs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lgfs)) {
      $dara.Model.validateArray(this.lgfs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLgfResponseBodyLgfs extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The intent ID.
   * 
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
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The LGF rule.
   * 
   * @example
   * .{0,5}北京天气
   */
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
  /**
   * @remarks
   * The list of LGF configurations.
   */
  lgfs?: ListLgfResponseBodyLgfs[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34fg57h2gh5783
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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


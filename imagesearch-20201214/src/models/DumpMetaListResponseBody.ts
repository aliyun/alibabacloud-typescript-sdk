// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DumpMetaListResponseBodyDataDumpMetaList extends $dara.Model {
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - 0: Succeeded.
   * - Non-zero: Failed.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 500
   */
  id?: number;
  /**
   * @remarks
   * The URL for downloading the result. The URL is valid for two hours.
   * 
   * @example
   * https://imagesearchname.oss-cn-shanghai.aliyuncs.com/xxx
   */
  metaUrl?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - PROCESSING: The task is being processed.
   * - FAIL: The task failed.
   * - SUCCESS: The task is completed.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was created. Unit: milliseconds.
   * 
   * @example
   * 1629095713000
   */
  utcCreate?: string;
  /**
   * @remarks
   * The time when the task was last updated. Unit: milliseconds.
   * 
   * @example
   * 1629095760000
   */
  utcModified?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      metaUrl: 'MetaUrl',
      msg: 'Msg',
      status: 'Status',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      metaUrl: 'string',
      msg: 'string',
      status: 'string',
      utcCreate: 'string',
      utcModified: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The collection of metadata export tasks.
   */
  dumpMetaList?: DumpMetaListResponseBodyDataDumpMetaList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dumpMetaList: 'DumpMetaList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dumpMetaList: { 'type': 'array', 'itemType': DumpMetaListResponseBodyDataDumpMetaList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dumpMetaList)) {
      $dara.Model.validateArray(this.dumpMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata export information.
   */
  data?: DumpMetaListResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
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
      data: DumpMetaListResponseBodyData,
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


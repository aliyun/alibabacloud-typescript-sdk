// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncreaseListResponseBodyDataIncrementsInstance extends $dara.Model {
  bucketName?: string;
  callbackAddress?: string;
  code?: string;
  errorUrl?: string;
  id?: number;
  msg?: string;
  path?: string;
  status?: string;
  utcCreate?: string;
  utcModified?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      callbackAddress: 'CallbackAddress',
      code: 'Code',
      errorUrl: 'ErrorUrl',
      id: 'Id',
      msg: 'Msg',
      path: 'Path',
      status: 'Status',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      callbackAddress: 'string',
      code: 'string',
      errorUrl: 'string',
      id: 'number',
      msg: 'string',
      path: 'string',
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

export class IncreaseListResponseBodyDataIncrements extends $dara.Model {
  instance?: IncreaseListResponseBodyDataIncrementsInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': IncreaseListResponseBodyDataIncrementsInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBodyData extends $dara.Model {
  increments?: IncreaseListResponseBodyDataIncrements;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
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
      increments: 'Increments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      increments: IncreaseListResponseBodyDataIncrements,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.increments && typeof (this.increments as any).validate === 'function') {
      (this.increments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the batch task.
   */
  data?: IncreaseListResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
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
      data: IncreaseListResponseBodyData,
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


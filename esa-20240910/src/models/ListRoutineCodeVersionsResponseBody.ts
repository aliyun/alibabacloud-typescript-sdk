// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineCodeVersionsResponseBodyCodeVersionsConfOptions extends $dara.Model {
  /**
   * @remarks
   * Code version configuration items NotFoundStrategy.
   * 
   * @example
   * SinglePageApplication
   */
  notFoundStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      notFoundStrategy: 'NotFoundStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notFoundStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutineCodeVersionsResponseBodyCodeVersions extends $dara.Model {
  /**
   * @remarks
   * The ID of the code version build.
   * 
   * @example
   * 25801233
   */
  buildId?: number;
  /**
   * @remarks
   * The description of the code version.
   * 
   * @example
   * test desc
   */
  codeDescription?: string;
  /**
   * @remarks
   * The version of the code.
   * 
   * @example
   * 1723599747213377175
   */
  codeVersion?: string;
  /**
   * @remarks
   * Code version configuration items.
   */
  confOptions?: ListRoutineCodeVersionsResponseBodyCodeVersionsConfOptions;
  /**
   * @remarks
   * The time when the code version was created.
   * 
   * @example
   * 2024-04-16T09:42:47Z
   */
  createTime?: string;
  /**
   * @remarks
   * Additional information about the code version.
   * 
   * @example
   * {\\"approver\\":[\\"348678\\",\\"111133\\",\\"411544\\"]}
   */
  extraInfo?: string;
  /**
   * @remarks
   * The status of the code version.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      buildId: 'BuildId',
      codeDescription: 'CodeDescription',
      codeVersion: 'CodeVersion',
      confOptions: 'ConfOptions',
      createTime: 'CreateTime',
      extraInfo: 'ExtraInfo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildId: 'number',
      codeDescription: 'string',
      codeVersion: 'string',
      confOptions: ListRoutineCodeVersionsResponseBodyCodeVersionsConfOptions,
      createTime: 'string',
      extraInfo: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.confOptions && typeof (this.confOptions as any).validate === 'function') {
      (this.confOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutineCodeVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code versions of the routine.
   */
  codeVersions?: ListRoutineCodeVersionsResponseBodyCodeVersions[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of code versions returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      codeVersions: 'CodeVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersions: { 'type': 'array', 'itemType': ListRoutineCodeVersionsResponseBodyCodeVersions },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.codeVersions)) {
      $dara.Model.validateArray(this.codeVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


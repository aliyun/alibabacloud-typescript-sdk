// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineCodeVersionsResponseBodyCodeVersionsConfOptions extends $dara.Model {
  /**
   * @remarks
   * The NotFoundStrategy configuration item of the code version.
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
   * The build ID of the code version.
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
   * The code version number.
   * 
   * @example
   * 1723599747213377175
   */
  codeVersion?: string;
  /**
   * @remarks
   * The configuration items of the code version.
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
   * The deployment environment. Valid values:
   * - **staging**: staging environment.
   * - **production**: production environment.
   * 
   * @example
   * staging
   */
  deployEnv?: string;
  /**
   * @remarks
   * The additional information about the code version.
   * 
   * @example
   * {\\"approver\\":[\\"348678\\",\\"111133\\",\\"411544\\"]}
   */
  extraInfo?: string;
  /**
   * @remarks
   * Indicates whether environment variables exist.
   */
  hasEnvVars?: boolean;
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
      deployEnv: 'DeployEnv',
      extraInfo: 'ExtraInfo',
      hasEnvVars: 'HasEnvVars',
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
      deployEnv: 'string',
      extraInfo: 'string',
      hasEnvVars: 'boolean',
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
   * The list of Edge Routine code versions.
   */
  codeVersions?: ListRoutineCodeVersionsResponseBodyCodeVersions[];
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
   * The total number of entries.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineCodeVersionsResponseBodyCodeVersionsConfOptions extends $dara.Model {
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
  buildId?: number;
  codeDescription?: string;
  codeVersion?: string;
  confOptions?: ListRoutineCodeVersionsResponseBodyCodeVersionsConfOptions;
  createTime?: string;
  extraInfo?: string;
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
  codeVersions?: ListRoutineCodeVersionsResponseBodyCodeVersions[];
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineCodeVersionsResponseBodyCodeVersions extends $dara.Model {
  codeDescription?: string;
  codeVersion?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      codeDescription: 'CodeDescription',
      codeVersion: 'CodeVersion',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDescription: 'string',
      codeVersion: 'string',
      createTime: 'string',
    };
  }

  validate() {
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


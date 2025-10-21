// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelInstanceResponseBodyModelInstanceInfoList extends $dara.Model {
  /**
   * @example
   * torch_rank_v1
   */
  easServiceName?: string;
  /**
   * @example
   * 1749450490000
   */
  gmtModified?: number;
  /**
   * @example
   * True
   */
  isSupportContentSafe?: number;
  /**
   * @example
   * False
   */
  isSupportImage?: boolean;
  /**
   * @example
   * False
   */
  isSupportPromptAttack?: number;
  /**
   * @example
   * True
   */
  isSupportSensitiveTopic?: number;
  /**
   * @example
   * True
   */
  isSupportText?: boolean;
  /**
   * @example
   * 123
   */
  modelInstanceId?: number;
  /**
   * @example
   * 1
   */
  modelSource?: number;
  /**
   * @example
   * 608226
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      easServiceName: 'EasServiceName',
      gmtModified: 'GmtModified',
      isSupportContentSafe: 'IsSupportContentSafe',
      isSupportImage: 'IsSupportImage',
      isSupportPromptAttack: 'IsSupportPromptAttack',
      isSupportSensitiveTopic: 'IsSupportSensitiveTopic',
      isSupportText: 'IsSupportText',
      modelInstanceId: 'ModelInstanceId',
      modelSource: 'ModelSource',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      easServiceName: 'string',
      gmtModified: 'number',
      isSupportContentSafe: 'number',
      isSupportImage: 'boolean',
      isSupportPromptAttack: 'number',
      isSupportSensitiveTopic: 'number',
      isSupportText: 'boolean',
      modelInstanceId: 'number',
      modelSource: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  modelInstanceInfoList?: ListModelInstanceResponseBodyModelInstanceInfoList[];
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
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      modelInstanceInfoList: 'ModelInstanceInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      modelInstanceInfoList: { 'type': 'array', 'itemType': ListModelInstanceResponseBodyModelInstanceInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modelInstanceInfoList)) {
      $dara.Model.validateArray(this.modelInstanceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


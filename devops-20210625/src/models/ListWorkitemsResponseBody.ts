// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkitemsResponseBodyWorkitems extends $dara.Model {
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  assignedTo?: string;
  /**
   * @example
   * Req
   */
  categoryIdentifier?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  creator?: string;
  /**
   * @example
   * html格式
   */
  document?: string;
  finishTime?: number;
  /**
   * @example
   * 1640850318000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1640850318000
   */
  gmtModified?: number;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  identifier?: string;
  /**
   * @example
   * NORMAL
   */
  logicalStatus?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  modifier?: string;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx24
   */
  parentIdentifier?: string;
  /**
   * @example
   * ABCD-1
   */
  serialNumber?: string;
  /**
   * @example
   * e8b26xxxxx6e76aa20xxxxx23
   */
  spaceIdentifier?: string;
  /**
   * @example
   * 需求项目
   */
  spaceName?: string;
  /**
   * @example
   * Project
   */
  spaceType?: string;
  /**
   * @example
   * 75528f17703e92e5a568......
   */
  sprintIdentifier?: string;
  /**
   * @example
   * 待处理
   */
  status?: string;
  /**
   * @example
   * 100005
   */
  statusIdentifier?: string;
  /**
   * @example
   * 1
   */
  statusStageIdentifier?: string;
  /**
   * @example
   * 测试工作项
   */
  subject?: string;
  /**
   * @example
   * 1640850328000
   */
  updateStatusAt?: number;
  /**
   * @example
   * 9uxxxxxxre573f5xxxxxx0
   */
  workitemTypeIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      assignedTo: 'assignedTo',
      categoryIdentifier: 'categoryIdentifier',
      creator: 'creator',
      document: 'document',
      finishTime: 'finishTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      logicalStatus: 'logicalStatus',
      modifier: 'modifier',
      parentIdentifier: 'parentIdentifier',
      serialNumber: 'serialNumber',
      spaceIdentifier: 'spaceIdentifier',
      spaceName: 'spaceName',
      spaceType: 'spaceType',
      sprintIdentifier: 'sprintIdentifier',
      status: 'status',
      statusIdentifier: 'statusIdentifier',
      statusStageIdentifier: 'statusStageIdentifier',
      subject: 'subject',
      updateStatusAt: 'updateStatusAt',
      workitemTypeIdentifier: 'workitemTypeIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: 'string',
      categoryIdentifier: 'string',
      creator: 'string',
      document: 'string',
      finishTime: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      identifier: 'string',
      logicalStatus: 'string',
      modifier: 'string',
      parentIdentifier: 'string',
      serialNumber: 'string',
      spaceIdentifier: 'string',
      spaceName: 'string',
      spaceType: 'string',
      sprintIdentifier: 'string',
      status: 'string',
      statusIdentifier: 'string',
      statusStageIdentifier: 'string',
      subject: 'string',
      updateStatusAt: 'number',
      workitemTypeIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkitemsResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  workitems?: ListWorkitemsResponseBodyWorkitems[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
      workitems: 'workitems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      workitems: { 'type': 'array', 'itemType': ListWorkitemsResponseBodyWorkitems },
    };
  }

  validate() {
    if(Array.isArray(this.workitems)) {
      $dara.Model.validateArray(this.workitems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


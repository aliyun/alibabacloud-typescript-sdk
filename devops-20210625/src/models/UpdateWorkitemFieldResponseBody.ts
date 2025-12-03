// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkitemFieldResponseBodyWorkitem extends $dara.Model {
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
   * 1
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
   * 28
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

export class UpdateWorkitemFieldResponseBody extends $dara.Model {
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
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  workitem?: UpdateWorkitemFieldResponseBodyWorkitem;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
      workitem: 'workitem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      workitem: UpdateWorkitemFieldResponseBodyWorkitem,
    };
  }

  validate() {
    if(this.workitem && typeof (this.workitem as any).validate === 'function') {
      (this.workitem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


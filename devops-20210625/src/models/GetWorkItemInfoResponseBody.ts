// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemInfoResponseBodyWorkitemCustomFieldsValueList extends $dara.Model {
  /**
   * @example
   * 2022-02-01 00:00:00
   */
  displayValue?: string;
  /**
   * @example
   * 2022-02-01 00:00:00
   */
  identifier?: string;
  /**
   * @example
   * 1
   */
  level?: number;
  /**
   * @example
   * 2022-02-01 00:00:00
   */
  value?: string;
  /**
   * @example
   * null
   */
  valueEn?: string;
  static names(): { [key: string]: string } {
    return {
      displayValue: 'displayValue',
      identifier: 'identifier',
      level: 'level',
      value: 'value',
      valueEn: 'valueEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayValue: 'string',
      identifier: 'string',
      level: 'number',
      value: 'string',
      valueEn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemInfoResponseBodyWorkitemCustomFields extends $dara.Model {
  /**
   * @example
   * 例如：date
   */
  fieldClassName?: string;
  /**
   * @example
   * 例：input
   */
  fieldFormat?: string;
  /**
   * @example
   * 例：80
   */
  fieldIdentifier?: string;
  /**
   * @example
   * 1
   */
  level?: number;
  /**
   * @example
   * null
   */
  objectValue?: string;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @example
   * 例：2022-01-06 00:00:00
   */
  value?: string;
  valueList?: GetWorkItemInfoResponseBodyWorkitemCustomFieldsValueList[];
  /**
   * @example
   * 5daa9a15c7fd55523996......
   */
  workitemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fieldClassName: 'fieldClassName',
      fieldFormat: 'fieldFormat',
      fieldIdentifier: 'fieldIdentifier',
      level: 'level',
      objectValue: 'objectValue',
      position: 'position',
      value: 'value',
      valueList: 'valueList',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldClassName: 'string',
      fieldFormat: 'string',
      fieldIdentifier: 'string',
      level: 'number',
      objectValue: 'string',
      position: 'number',
      value: 'string',
      valueList: { 'type': 'array', 'itemType': GetWorkItemInfoResponseBodyWorkitemCustomFieldsValueList },
      workitemIdentifier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemInfoResponseBodyWorkitemTagDetails extends $dara.Model {
  color?: string;
  identifier?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'color',
      identifier: 'identifier',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      identifier: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemInfoResponseBodyWorkitemVersions extends $dara.Model {
  identifier?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'identifier',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemInfoResponseBodyWorkitem extends $dara.Model {
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
  customFields?: GetWorkItemInfoResponseBodyWorkitemCustomFields[];
  /**
   * @example
   * html格式
   */
  document?: string;
  documentFormat?: string;
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
  participant?: string[];
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
  sprint?: string[];
  /**
   * @example
   * 待处理
   */
  status?: string;
  /**
   * @example
   * 例：100005
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
  tag?: string[];
  tagDetails?: GetWorkItemInfoResponseBodyWorkitemTagDetails[];
  tracker?: string[];
  /**
   * @example
   * 1640850328000
   */
  updateStatusAt?: number;
  verifier?: string[];
  versions?: GetWorkItemInfoResponseBodyWorkitemVersions[];
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
      customFields: 'customFields',
      document: 'document',
      documentFormat: 'documentFormat',
      finishTime: 'finishTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      logicalStatus: 'logicalStatus',
      modifier: 'modifier',
      parentIdentifier: 'parentIdentifier',
      participant: 'participant',
      serialNumber: 'serialNumber',
      spaceIdentifier: 'spaceIdentifier',
      spaceName: 'spaceName',
      spaceType: 'spaceType',
      sprint: 'sprint',
      status: 'status',
      statusIdentifier: 'statusIdentifier',
      statusStageIdentifier: 'statusStageIdentifier',
      subject: 'subject',
      tag: 'tag',
      tagDetails: 'tagDetails',
      tracker: 'tracker',
      updateStatusAt: 'updateStatusAt',
      verifier: 'verifier',
      versions: 'versions',
      workitemTypeIdentifier: 'workitemTypeIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: 'string',
      categoryIdentifier: 'string',
      creator: 'string',
      customFields: { 'type': 'array', 'itemType': GetWorkItemInfoResponseBodyWorkitemCustomFields },
      document: 'string',
      documentFormat: 'string',
      finishTime: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      identifier: 'string',
      logicalStatus: 'string',
      modifier: 'string',
      parentIdentifier: 'string',
      participant: { 'type': 'array', 'itemType': 'string' },
      serialNumber: 'string',
      spaceIdentifier: 'string',
      spaceName: 'string',
      spaceType: 'string',
      sprint: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      statusIdentifier: 'string',
      statusStageIdentifier: 'string',
      subject: 'string',
      tag: { 'type': 'array', 'itemType': 'string' },
      tagDetails: { 'type': 'array', 'itemType': GetWorkItemInfoResponseBodyWorkitemTagDetails },
      tracker: { 'type': 'array', 'itemType': 'string' },
      updateStatusAt: 'number',
      verifier: { 'type': 'array', 'itemType': 'string' },
      versions: { 'type': 'array', 'itemType': GetWorkItemInfoResponseBodyWorkitemVersions },
      workitemTypeIdentifier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(Array.isArray(this.participant)) {
      $dara.Model.validateArray(this.participant);
    }
    if(Array.isArray(this.sprint)) {
      $dara.Model.validateArray(this.sprint);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.tagDetails)) {
      $dara.Model.validateArray(this.tagDetails);
    }
    if(Array.isArray(this.tracker)) {
      $dara.Model.validateArray(this.tracker);
    }
    if(Array.isArray(this.verifier)) {
      $dara.Model.validateArray(this.verifier);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemInfoResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMessage?: string;
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
  workitem?: GetWorkItemInfoResponseBodyWorkitem;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      workitem: 'workitem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workitem: GetWorkItemInfoResponseBodyWorkitem,
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


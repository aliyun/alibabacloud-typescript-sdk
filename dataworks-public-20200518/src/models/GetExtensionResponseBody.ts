// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExtensionResponseBodyExtensionBindEventList extends $dara.Model {
  /**
   * @remarks
   * The code of the extension point event.
   * 
   * @example
   * commit-file
   */
  eventCode?: string;
  /**
   * @remarks
   * The name of the extension point event.
   * 
   * @example
   * File submission pre-event
   */
  eventName?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      eventName: 'EventName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExtensionResponseBodyExtensionEventCategoryList extends $dara.Model {
  /**
   * @remarks
   * The code of the event type.
   * 
   * @example
   * file-change
   */
  categoryCode?: string;
  /**
   * @remarks
   * The name of the event type.
   * 
   * @example
   * File change event
   */
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      categoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExtensionResponseBodyExtension extends $dara.Model {
  /**
   * @remarks
   * The list of extension points.
   */
  bindEventList?: GetExtensionResponseBodyExtensionBindEventList[];
  /**
   * @remarks
   * The URL of the extension details page, on which users can view the details of the process blocked by the extension.
   * 
   * @example
   * https://www.aliyun.com/
   */
  detailUrl?: string;
  /**
   * @remarks
   * The list of event types.
   */
  eventCategoryList?: GetExtensionResponseBodyExtensionEventCategoryList[];
  /**
   * @remarks
   * The unique code of the extension.
   * 
   * @example
   * ce4*********086da5
   */
  extensionCode?: string;
  /**
   * @remarks
   * The description of the extension.
   * 
   * @example
   * This is a description
   */
  extensionDesc?: string;
  /**
   * @remarks
   * The name of the extension.
   * 
   * @example
   * Extension name
   */
  extensionName?: string;
  /**
   * @remarks
   * The URL of the help documentation of the extension.
   * 
   * @example
   * https://www.aliyun.com/
   */
  helpDocUrl?: string;
  /**
   * @remarks
   * The options defined for the extension.
   * 
   * @example
   * Option configuration
   */
  optionSetting?: string;
  /**
   * @remarks
   * The parameter settings of the extension. For more information, see [Configure extension parameters](https://help.aliyun.com/document_detail/405354.html).
   * 
   * @example
   * extension.project.disabled=projectId1,projectId2,projectId3
   */
  parameterSetting?: string;
  /**
   * @remarks
   * The workspace for testing. If the extension is being tested, the extension can be used only in the workspace for testing.
   * 
   * @example
   * 13552
   */
  projectTesting?: number;
  /**
   * @remarks
   * The state of the extension. 0: Testing, 1: Publishing, 3: Disabled, 4: Processing, 5: Approved, 6: Approve Failed
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bindEventList: 'BindEventList',
      detailUrl: 'DetailUrl',
      eventCategoryList: 'EventCategoryList',
      extensionCode: 'ExtensionCode',
      extensionDesc: 'ExtensionDesc',
      extensionName: 'ExtensionName',
      helpDocUrl: 'HelpDocUrl',
      optionSetting: 'OptionSetting',
      parameterSetting: 'ParameterSetting',
      projectTesting: 'ProjectTesting',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindEventList: { 'type': 'array', 'itemType': GetExtensionResponseBodyExtensionBindEventList },
      detailUrl: 'string',
      eventCategoryList: { 'type': 'array', 'itemType': GetExtensionResponseBodyExtensionEventCategoryList },
      extensionCode: 'string',
      extensionDesc: 'string',
      extensionName: 'string',
      helpDocUrl: 'string',
      optionSetting: 'string',
      parameterSetting: 'string',
      projectTesting: 'number',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bindEventList)) {
      $dara.Model.validateArray(this.bindEventList);
    }
    if(Array.isArray(this.eventCategoryList)) {
      $dara.Model.validateArray(this.eventCategoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExtensionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the extension.
   */
  extension?: GetExtensionResponseBodyExtension;
  /**
   * @remarks
   * The request ID. You can use the request ID to query logs and troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: GetExtensionResponseBodyExtension,
      requestId: 'string',
    };
  }

  validate() {
    if(this.extension && typeof (this.extension as any).validate === 'function') {
      (this.extension as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


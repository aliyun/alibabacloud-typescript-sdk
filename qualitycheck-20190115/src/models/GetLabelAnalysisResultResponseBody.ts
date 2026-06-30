// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLabelAnalysisResultResponseBodyDataTagListChildrenChildrenChildrenChildren extends $dara.Model {
  /**
   * @remarks
   * The description of the tag analysis.
   * 
   * @example
   * 当前层级未命中有效标签
   */
  remarks?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 无效会话
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      remarks: 'Remarks',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remarks: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelAnalysisResultResponseBodyDataTagListChildrenChildrenChildren extends $dara.Model {
  /**
   * @remarks
   * The list of child nodes.
   */
  children?: GetLabelAnalysisResultResponseBodyDataTagListChildrenChildrenChildrenChildren[];
  /**
   * @remarks
   * The description of the tag analysis.
   * 
   * @example
   * 用户在千问内通过高德打车支付17元失败，转支付宝后变原价；客服围绕支付失败与余额、实名认证、授权绑定进行排查。问题发生在千问调用高德打车场景，属千问×高德。
   */
  remarks?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 千问×高德
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      remarks: 'Remarks',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': GetLabelAnalysisResultResponseBodyDataTagListChildrenChildrenChildrenChildren },
      remarks: 'string',
      tagName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelAnalysisResultResponseBodyDataTagListChildrenChildren extends $dara.Model {
  /**
   * @remarks
   * The list of child nodes.
   */
  children?: GetLabelAnalysisResultResponseBodyDataTagListChildrenChildrenChildren[];
  /**
   * @remarks
   * The description of the tag analysis.
   * 
   * @example
   * 用户在千问内通过高德打车支付17元失败，转支付宝后变原价；客服围绕支付失败与余额、实名认证、授权绑定进行排查。问题发生在千问调用高德打车场景，属千问×高德。
   */
  remarks?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 千问×高德
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      remarks: 'Remarks',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': GetLabelAnalysisResultResponseBodyDataTagListChildrenChildrenChildren },
      remarks: 'string',
      tagName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelAnalysisResultResponseBodyDataTagListChildren extends $dara.Model {
  /**
   * @remarks
   * The list of child nodes.
   */
  children?: GetLabelAnalysisResultResponseBodyDataTagListChildrenChildren[];
  /**
   * @remarks
   * The description of the tag analysis.
   * 
   * @example
   * 用户在千问内通过高德打车支付17元失败，转支付宝后变原价；客服围绕支付失败与余额、实名认证、授权绑定进行排查。问题发生在千问调用高德打车场景，属千问×高德。
   */
  remarks?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 千问×高德
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      remarks: 'Remarks',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': GetLabelAnalysisResultResponseBodyDataTagListChildrenChildren },
      remarks: 'string',
      tagName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelAnalysisResultResponseBodyDataTagList extends $dara.Model {
  /**
   * @remarks
   * The list of child nodes.
   */
  children?: GetLabelAnalysisResultResponseBodyDataTagListChildren[];
  /**
   * @remarks
   * The description of the tag analysis.
   * 
   * @example
   * 用户在千问内通过高德打车支付17元失败，转支付宝后变原价；客服围绕支付失败与余额、实名认证、授权绑定进行排查。问题发生在千问调用高德打车场景，属千问×高德。
   */
  remarks?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 千问×高德
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      remarks: 'Remarks',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': GetLabelAnalysisResultResponseBodyDataTagListChildren },
      remarks: 'string',
      tagName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelAnalysisResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of input tokens accumulated during this task.
   * 
   * @example
   * 7371
   */
  inputTokens?: number;
  /**
   * @remarks
   * The total number of output tokens accumulated during this task.
   * 
   * @example
   * 355
   */
  outputTokens?: number;
  /**
   * @remarks
   * The tree-structured tag results.
   */
  tagList?: GetLabelAnalysisResultResponseBodyDataTagList[];
  /**
   * @remarks
   * The total number of tokens accumulated during this task.
   * 
   * @example
   * 7726
   */
  totalTokens?: number;
  /**
   * @remarks
   * The total number of Qwen-Plus model calls accumulated during this task.
   * 
   * @example
   * 4
   */
  tyxmPlusCount?: number;
  /**
   * @remarks
   * The total number of Qwen-Turbo model calls accumulated during this task.
   * 
   * @example
   * 0
   */
  tyxmTurboCount?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      tagList: 'TagList',
      totalTokens: 'TotalTokens',
      tyxmPlusCount: 'TyxmPlusCount',
      tyxmTurboCount: 'TyxmTurboCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      tagList: { 'type': 'array', 'itemType': GetLabelAnalysisResultResponseBodyDataTagList },
      totalTokens: 'number',
      tyxmPlusCount: 'number',
      tyxmTurboCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelAnalysisResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. **200** indicates success. Other values indicate failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetLabelAnalysisResultResponseBodyData;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetLabelAnalysisResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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


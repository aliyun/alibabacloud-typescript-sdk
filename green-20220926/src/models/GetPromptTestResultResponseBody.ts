// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptTestResultResponseBodyResultLabelDetails extends $dara.Model {
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * 暴恐
   */
  description?: string;
  /**
   * @remarks
   * The labels.
   * 
   * @example
   * terrorism
   */
  label?: string;
  /**
   * @remarks
   * The reason why the model determined this risk level for the text.
   * 
   * @example
   * 该文本涉及暴力恐怖信息
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptTestResultResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The content.
   * 
   * @example
   * 测试文本
   */
  content?: string;
  /**
   * @remarks
   * The labels.
   */
  labelDetails?: GetPromptTestResultResponseBodyResultLabelDetails[];
  /**
   * @remarks
   * The risk level, which is returned based on the configured high and low risk scores. Valid values:
   * 
   * - high: High risk.
   * 
   * - medium: Medium risk.
   *  
   * - low: Low risk.
   * 
   *  - none: No risk detected.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      labelDetails: 'LabelDetails',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      labelDetails: { 'type': 'array', 'itemType': GetPromptTestResultResponseBodyResultLabelDetails },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelDetails)) {
      $dara.Model.validateArray(this.labelDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptTestResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: GetPromptTestResultResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetPromptTestResultResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


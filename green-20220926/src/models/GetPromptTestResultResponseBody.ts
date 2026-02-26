// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptTestResultResponseBodyResultLabelDetails extends $dara.Model {
  description?: string;
  /**
   * @example
   * terrorism
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
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
  content?: string;
  labelDetails?: GetPromptTestResultResponseBodyResultLabelDetails[];
  /**
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
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
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


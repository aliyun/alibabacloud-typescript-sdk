// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataDesensPlanTemplateValue extends $dara.Model {
  /**
   * @remarks
   * The name of the Desensitization Method.
   * 
   * @example
   * hash
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether watermarking is supported. Valid values:
   * 
   * - true: Watermarking is supported.
   * 
   * - false: Watermarking is not supported.
   * 
   * @example
   * true
   */
  supportWaterMark?: boolean;
  /**
   * @remarks
   * A list of Desensitization Parameters and their descriptions.
   */
  extParamTemplate?: any[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      supportWaterMark: 'SupportWaterMark',
      extParamTemplate: 'ExtParamTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      supportWaterMark: 'boolean',
      extParamTemplate: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.extParamTemplate)) {
      $dara.Model.validateArray(this.extParamTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


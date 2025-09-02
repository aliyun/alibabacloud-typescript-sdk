// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataDesensPlanTemplateValue extends $dara.Model {
  /**
   * @remarks
   * The name of the data masking method.
   * 
   * @example
   * hash
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether a watermark is added. Valid values:
   * 
   * *   true: allow
   * *   false: disallow
   * 
   * @example
   * true
   */
  supportWaterMark?: boolean;
  /**
   * @remarks
   * The data masking parameters and their descriptions.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateReportRequestReportConfigs extends $dara.Model {
  /**
   * @example
   * CalcBMD
   */
  action?: string;
  /**
   * @example
   * pdf
   */
  format?: string;
  /**
   * @example
   * 1
   */
  templateVersion?: string;
  /**
   * @example
   * dark
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      format: 'Format',
      templateVersion: 'TemplateVersion',
      theme: 'Theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      format: 'string',
      templateVersion: 'string',
      theme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


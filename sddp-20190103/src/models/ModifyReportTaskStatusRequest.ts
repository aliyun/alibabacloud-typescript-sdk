// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReportTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * Specifies the status of the report task. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * > This parameter is required.
   * 
   * @example
   * 0
   */
  reportTaskStatus?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      reportTaskStatus: 'ReportTaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      lang: 'string',
      reportTaskStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


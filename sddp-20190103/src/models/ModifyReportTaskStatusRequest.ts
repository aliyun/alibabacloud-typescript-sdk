// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReportTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese
   * 
   * - **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The status to set for the report task. Valid values:
   * 
   * - **0**: Disable
   * 
   * - **1**: Enable
   * 
   * >Notice: 
   * 
   * This parameter is required.
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


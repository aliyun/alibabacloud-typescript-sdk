// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefaultLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The default risk level ID for unrecognized data. Valid values:
   * - **1**: N/A.
   * - **2**: S1.
   * - **3**: S2.
   * - **4**: S3.
   * - **5**: S4.
   * 
   * @example
   * 4
   */
  defaultId?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * - **zh_cn**: Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The risk level IDs for data classified as "sensitive". Separate multiple IDs with commas (,). Valid values:
   * 
   * - **1**: N/A.
   * - **2**: S1.
   * - **3**: S2.
   * - **4**: S3.
   * - **5**: S4.
   * 
   * @example
   * 1,2,3,4
   */
  sensitiveIds?: string;
  static names(): { [key: string]: string } {
    return {
      defaultId: 'DefaultId',
      lang: 'Lang',
      sensitiveIds: 'SensitiveIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultId: 'number',
      lang: 'string',
      sensitiveIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


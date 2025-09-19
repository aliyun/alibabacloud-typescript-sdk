// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFrontVulPatchListRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the Windows system vulnerability. The value is a JSON string that contains the following fields:
   * 
   * *   **name**: the name of the vulnerability.
   * *   **uuid**: the UUID of the server on which the vulnerability is detected.
   * *   **tag**: the tag that is added to the vulnerability. Set this field to **system**, which indicates Windows system vulnerabilities.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"name":"5000803","uuid":"026c9296-1234-5678-b937-a7d81f05****","tag":"system"}]
   */
  info?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The operation that you want to perform on the vulnerability. Set the value to **vul_fix**, which indicates vulnerability fixing.
   * 
   * This parameter is required.
   * 
   * @example
   * vul_fix
   */
  operateType?: string;
  /**
   * @remarks
   * The type of the vulnerability. Set the value to **sys**, which indicates Windows system vulnerabilities.
   * 
   * This parameter is required.
   * 
   * @example
   * sys
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      lang: 'Lang',
      operateType: 'OperateType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      lang: 'string',
      operateType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


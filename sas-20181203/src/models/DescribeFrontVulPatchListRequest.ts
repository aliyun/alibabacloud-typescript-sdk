// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFrontVulPatchListRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the Windows system vulnerability to query. The value is a JSON string that contains the following fields:
   * - **name**: the vulnerability name.
   * - **uuid**: the UUID of the server that has the vulnerability.
   * - **tag**: the vulnerability tag. Set this field to **system**, which indicates a system vulnerability.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"name":"5000803","uuid":"026c9296-1234-5678-b937-a7d81f05****","tag":"system"}]
   */
  info?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The method to handle the vulnerability. Set this parameter to **vul_fix**, which indicates fixing the vulnerability.
   * 
   * This parameter is required.
   * 
   * @example
   * vul_fix
   */
  operateType?: string;
  /**
   * @remarks
   * The type of vulnerability to query. Set this parameter to **sys**, which indicates a Windows vulnerability.
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


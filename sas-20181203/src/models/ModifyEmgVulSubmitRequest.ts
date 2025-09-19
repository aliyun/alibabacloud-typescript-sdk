// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEmgVulSubmitRequest extends $dara.Model {
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
   * The name of the vulnerability.
   * 
   * This parameter is required.
   * 
   * @example
   * scan:ASCV-2019-032401
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to scan for urgent vulnerabilities. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * This parameter is required.
   * 
   * @example
   * yes
   */
  userAgreement?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      name: 'Name',
      userAgreement: 'UserAgreement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      name: 'string',
      userAgreement: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


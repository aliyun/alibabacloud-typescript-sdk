// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageVulWhitelistTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelist ID.
   * 
   * @example
   * 2000083
   */
  id?: number;
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
   * The reason why you add the vulnerability to the whitelist.
   * 
   * @example
   * ignore
   */
  reason?: string;
  /**
   * @remarks
   * The source of the whitelist. Valid values:
   * 
   * *   **image**
   * *   **agentless**
   * 
   * @example
   * image
   */
  source?: string;
  /**
   * @remarks
   * The vulnerability that you want to add to the whitelist. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **type**: The type of the vulnerability. The value is fixed to repo.
   * *   **target**: The content of the vulnerability. The value is in the format of Namespace/Image repository.
   * 
   * @example
   * {\\"type\\":\\"repo\\",\\"target\\":[\\"sas_test/script_0209\\",\\"sas_test/script\\"]}
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
      reason: 'Reason',
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
      reason: 'string',
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


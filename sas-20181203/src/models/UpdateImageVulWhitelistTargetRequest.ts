// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageVulWhitelistTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the vulnerability whitelist.
   * 
   * @example
   * 2000083
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The reason for adding the whitelist.
   * 
   * @example
   * ignore
   */
  reason?: string;
  /**
   * @remarks
   * The source of the whitelist. Valid values:
   * - **image**: image
   * - **agentless**: agentless.
   * 
   * @example
   * image
   */
  source?: string;
  /**
   * @remarks
   * The operation target. This parameter is in JSON format and contains the following fields:
   * 
   * - **type**: The target type. Set to repo.
   * - **target**: The target content. Format: namespace/image repository.
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


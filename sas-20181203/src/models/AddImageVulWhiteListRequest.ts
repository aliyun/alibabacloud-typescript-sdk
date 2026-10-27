// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageVulWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: zh. Valid values:
   * - **zh**: Chinese
   * - **en**: English
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
   * already config in another way
   */
  reason?: string;
  /**
   * @remarks
   * The source of the whitelist. Valid values:
   * - **image**: image
   * - **agentless**: agentless
   * 
   * @example
   * image
   */
  source?: string;
  /**
   * @remarks
   * The operation target. This parameter is in JSON format and contains the following fields:
   * 
   * - **type**: the target type. Set the value to repo.
   * - **target**: the target content. Format: namespace/image repository.
   * 
   * @example
   * {\\"type\\":\\"repo\\",\\"target\\":[\\"sas_test/script_0209\\",\\"sas_test/script\\"]}
   */
  target?: string;
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * - **cve**: system vulnerability
   * - **sca**: application vulnerability
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The whitelist. This parameter is in JSON format and contains the following fields:
   * 
   * - **Type**: the vulnerability type. Valid values: cve and sca.
   * - **Name**: the name in the vulnerability advisory.
   * - **AliasName**: the alias in the vulnerability advisory.
   * 
   * @example
   * [{\\"Type\\":\\"sca\\",\\"Name\\":\\"imgsca:java:spring-core:AVD-2022-1124599\\",\\"AliasName\\":\\"Spring Framework JDK >= 9 (CVE-2022-22965)\\"}]
   */
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      reason: 'Reason',
      source: 'Source',
      target: 'Target',
      type: 'Type',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      reason: 'string',
      source: 'string',
      target: 'string',
      type: 'string',
      whitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


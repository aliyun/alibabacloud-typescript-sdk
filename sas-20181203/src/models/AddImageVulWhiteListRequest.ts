// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageVulWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: zh. Valid values:
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
   * already config in another way
   */
  reason?: string;
  /**
   * @remarks
   * The source of the whitelist. Valid values:
   * - **image**
   * - **agentless**
   * 
   * @example
   * image
   */
  source?: string;
  /**
   * @remarks
   * The object on which you want to perform the operation. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **type**: the object type. The value is fixed to repo.
   * *   **target**: the object content. The value is in the Namespace/Image repository format.
   * 
   * @example
   * {\\"type\\":\\"repo\\",\\"target\\":[\\"sas_test/script_0209\\",\\"sas_test/script\\"]}
   */
  target?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: system vulnerability
   * *   **sca**: application vulnerability
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The whitelist. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **Type**: the vulnerability type. Valid values: cve and sca.
   * *   **Name**: the name of the vulnerability that is specified in Common Vulnerabilities and Exposures (CVE).
   * *   **AliasName**: the alias of the vulnerability that is specified in CVE.
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


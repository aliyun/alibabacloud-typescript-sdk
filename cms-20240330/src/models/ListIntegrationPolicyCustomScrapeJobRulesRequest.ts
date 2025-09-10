// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyCustomScrapeJobRulesRequest extends $dara.Model {
  /**
   * @example
   * release12345678
   */
  addonReleaseName?: string;
  /**
   * @example
   * true
   */
  encryptYaml?: boolean;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      addonReleaseName: 'addonReleaseName',
      encryptYaml: 'encryptYaml',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonReleaseName: 'string',
      encryptYaml: 'boolean',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


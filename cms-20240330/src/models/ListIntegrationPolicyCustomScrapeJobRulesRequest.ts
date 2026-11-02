// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyCustomScrapeJobRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on release.
   * 
   * @example
   * release12345678
   */
  addonReleaseName?: string;
  /**
   * @remarks
   * The collector identifier. If a release exists, pass the release name. Otherwise, pass the component name.
   * 
   * @example
   * collector:metric-agent:policy:policy-bfd3d455fd6f4bc8
   */
  collectorReleaseName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the YAML content.
   * 
   * @example
   * true
   */
  encryptYaml?: boolean;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      addonReleaseName: 'addonReleaseName',
      collectorReleaseName: 'collectorReleaseName',
      encryptYaml: 'encryptYaml',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonReleaseName: 'string',
      collectorReleaseName: 'string',
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


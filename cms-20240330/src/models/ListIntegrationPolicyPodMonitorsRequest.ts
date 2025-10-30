// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyPodMonitorsRequest extends $dara.Model {
  /**
   * @remarks
   * Addon Release name.
   * 
   * @example
   * release-123456789
   */
  addonReleaseName?: string;
  /**
   * @remarks
   * Whether to encrypt Yaml.
   * 
   * @example
   * true
   */
  encryptYaml?: boolean;
  /**
   * @remarks
   * Namespace.
   * 
   * @example
   * default
   */
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyPodMonitorsRequest extends $dara.Model {
  /**
   * @remarks
   * The addon release name.
   * 
   * @example
   * release-123456789
   */
  addonReleaseName?: string;
  /**
   * @remarks
   * The collector identifier. If a release is available, specify the release name. Otherwise, specify the component name.
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
   * default
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


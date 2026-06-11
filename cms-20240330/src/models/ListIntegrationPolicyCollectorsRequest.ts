// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyCollectorsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on release.
   * 
   * @example
   * release-1234567
   */
  addonReleaseName?: string;
  /**
   * @remarks
   * The collector type.
   * 
   * This parameter is required.
   * 
   * @example
   * Exporter
   */
  collectorType?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      addonReleaseName: 'addonReleaseName',
      collectorType: 'collectorType',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonReleaseName: 'string',
      collectorType: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter regions by assets with auditing enabled. Valid values: true: Enabled. false: Disabled. If you do not specify this parameter, this filter condition is not applied.
   */
  audited?: boolean;
  /**
   * @remarks
   * Specifies whether to filter regions by assets with detection enabled. Valid values: true: Enabled. false: Disabled. If you do not specify this parameter, this filter condition is not applied.
   */
  identified?: boolean;
  /**
   * @remarks
   * The language of the response. Valid values: zh: Chinese. en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to retrieve all regions.
   */
  loadAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      audited: 'Audited',
      identified: 'Identified',
      lang: 'Lang',
      loadAll: 'LoadAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audited: 'boolean',
      identified: 'boolean',
      lang: 'string',
      loadAll: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


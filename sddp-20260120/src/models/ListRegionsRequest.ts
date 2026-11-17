// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter regions based on assets for which auditing is enabled. Valid values: true: Auditing is enabled. false: Auditing is not enabled. If you do not specify this parameter, this condition is not used.
   */
  audited?: boolean;
  /**
   * @remarks
   * Specifies whether to filter regions based on assets for which detection is enabled. Valid values: true: Detection is enabled. false: Detection is not enabled. If you do not specify this parameter, this condition is not used.
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


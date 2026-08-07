// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCategoryTemplateListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**.
   * 
   * Valid values:
   * 
   * - **zh_cn**: Simplified Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The scenario in which the API is called. Default value: **null**.
   * 
   * Valid values:
   * - **null**: legacy version.
   * - **0**: legacy version.
   * - **1**: new version.
   * 
   * @example
   * 1
   */
  usageScenario?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      featureType: 'FeatureType',
      lang: 'Lang',
      pageSize: 'PageSize',
      usageScenario: 'UsageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      featureType: 'number',
      lang: 'string',
      pageSize: 'number',
      usageScenario: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCategoryTemplateListRequest extends $dara.Model {
  /**
   * @remarks
   * Page number for paginated queries. Default value: 1.
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
   * Set the language type for the request and response messages, default is **zh_cn**.
   * Values:
   * 
   * - **zh_cn**: Chinese (Simplified)
   * - **en_us**: English (United States)
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * When performing a paginated query, set the number of items per page. Default value is **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * API call scenario, default is **null**.
   * Values:
   * - **null**: Old version
   * - **0**: Old version
   * - **1**: New version
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


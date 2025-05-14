// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterInspectReportDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the inspection item. Valid values:
   * 
   * *   security: Security compliance
   * *   performance: Performance efficiency
   * *   stability: Business stability
   * *   limitation: Service limits
   * *   cost: Cost optimization
   * 
   * @example
   * cost
   */
  category?: string;
  /**
   * @remarks
   * Inspection results filtering. If this parameter is set to true, only abnormal inspection items are returned.
   * 
   * @example
   * true
   */
  enableFilter?: boolean;
  /**
   * @remarks
   * The query language.
   * 
   * *   zh_CN
   * *   en_US
   * 
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * The level of the inspection item. Valid values:
   * 
   * *   advice: Suggestions
   * *   warning: Low severity
   * *   error: Medium severity
   * *   critical: High severity
   * 
   * @example
   * error
   */
  level?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Maximum value: 50.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to display the returned tags on multiple pages.
   * 
   * @example
   * bb41e2bcb47b747389dce6c0d2
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the inspection object. Only items that meet the targetType parameter are returned.
   * 
   * @example
   * NodePool
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      enableFilter: 'enableFilter',
      language: 'language',
      level: 'level',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enableFilter: 'boolean',
      language: 'string',
      level: 'string',
      maxResults: 'number',
      nextToken: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


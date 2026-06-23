// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterInspectReportDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the inspection item. Valid values:
   * - security: security and compliance
   * - performance: performance and efficiency 
   * - stability: business stability
   * - limitation: service limits 
   * - cost: cost optimization.
   * 
   * @example
   * cost
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to filter check items. If set to true, only abnormal check items with result=true are returned.
   * 
   * @example
   * true
   */
  enableFilter?: boolean;
  /**
   * @remarks
   * The query language. Valid values:
   * - zh_CN
   * - en_US.
   * 
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * The level of the inspection item. Valid values:
   * - advice: suggestion
   * - warning: low-risk
   * - error: medium-risk
   * - critical: high-risk.
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
   * The pagination token.
   * 
   * @example
   * bb41e2bcb47b747389dce6c0d2
   */
  nextToken?: string;
  /**
   * @remarks
   * The object type of the inspection target. Only check items that match the specified targetType are returned.
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


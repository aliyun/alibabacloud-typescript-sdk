// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteDeliveryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The log type of real-time logs. Valid values:
   * 
   * - **dcdn_log_access_l1 (default)**: access logs.
   * - **dcdn_log_er**: Edge Routine logs.
   * - **dcdn_log_waf**: security protection logs.
   * - **dcdn_log_ipa**: Layer 4 acceleration logs.
   * 
   * @example
   * dcdn_log_er
   */
  businessType?: string;
  /**
   * @remarks
   * The discard rate.
   * 
   * @example
   * 0.0
   */
  discardRate?: number;
  /**
   * @remarks
   * The list of delivery fields to modify, separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * ClientIP,UserAgent
   */
  fieldName?: string;
  /**
   * @remarks
   * The version of the filter rule.
   * 
   * > Compatible with legacy filter rules. The default value is v1. Newly created rules use v2.
   * 
   * @example
   * v2
   */
  filterVer?: string;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * cdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      filterVer: 'FilterVer',
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      filterVer: 'string',
      siteId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


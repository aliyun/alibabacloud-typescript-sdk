// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteDeliveryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * *   dcdn_log_access_l1 (default): access logs.
   * *   dcdn_log_er: Edge Routine logs.
   * *   dcdn_log_waf: firewall logs.
   * *   dcdn_log_ipa: TCP/UDP proxy logs.
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
   * The log fields that you want to include in real-time logs to be delivered. Separate the log fields with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ClientIP,UserAgent
   */
  fieldName?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The name of the delivery task.
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
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      discardRate: 'number',
      fieldName: 'string',
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


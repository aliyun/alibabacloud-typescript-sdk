// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserDeliveryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The real-time log type. Valid values:
   * 
   * - **dcdn_log_access_l1 (default)**: access logs.
   * - **dcdn_log_er**: Edge Routine function logs.
   * - **dcdn_log_waf**: security protection logs.
   * - **dcdn_log_ipa**: Layer 4 acceleration logs.
   * 
   * @example
   * dcdn_log_er
   */
  businessType?: string;
  /**
   * @remarks
   * The list of ER PODs to configure.
   * 
   * @example
   * xxx,xxx
   */
  details?: string;
  /**
   * @remarks
   * The discard rate. If not specified, the default value is 0.
   * 
   * @example
   * 0
   */
  discardRate?: number;
  /**
   * @remarks
   * The selected fields, separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ClientRequestID,ClientRequestHost
   */
  fieldName?: string;
  /**
   * @remarks
   * The version of the filter rule.
   * 
   * > Compatible with legacy filter rules. The default value is v1. Newly created tasks use v2.
   * 
   * @example
   * v2
   */
  filterVer?: string;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      details: 'Details',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      filterVer: 'FilterVer',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      details: 'string',
      discardRate: 'number',
      fieldName: 'string',
      filterVer: 'string',
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


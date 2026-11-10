// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDeliveryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The real-time log type. Valid values:
   * - **dcdn_log_access_l1** (default): Access logs.
   * - **dcdn_log_er**: Edge Routine logs.
   * - **dcdn_log_waf**: Security protection logs.
   * - **dcdn_log_ipa**: Layer 4 acceleration logs.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


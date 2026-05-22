// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDeliveryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * 1.  dcdn_log_access_l1 (default): access logs.
   * 2.  dcdn_log_er: Edge Routine logs.
   * 3.  dcdn_log_waf: firewall logs.
   * 4.  dcdn_log_ipa: TCP/UDP proxy logs.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
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


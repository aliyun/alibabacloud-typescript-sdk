// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDcdnUserRealTimeDeliveryFieldRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the collected logs. Default value: cdn_log_access_l1. Valid values:
   * 
   * *   **cdn_log_access_l1**: access logs of L1 Dynamic Route for CDN (DCDN) points of presence (POPs)
   * *   **cdn_log_origin**: back-to-origin logs
   * *   **cdn_log_er**: EdgeRoutine logs
   * 
   * @example
   * cdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The list of fields. Separate multiple fields with commas (,). For more information, see [Fields in a real-time log](https://help.aliyun.com/document_detail/324199.html).
   * 
   * This parameter is required.
   * 
   * @example
   * body_bytes_sent,client_ip,content_type
   */
  fields?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      fields: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


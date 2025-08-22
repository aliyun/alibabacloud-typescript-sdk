// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSlrAndSlsProjectRequest extends $dara.Model {
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
   * The region where Log Service resides. Valid values:
   * 
   * *   **cn-hangzhou**
   * *   **cn-shanghai**
   * *   **cn-qingdao**
   * *   **cn-beijing**
   * *   **cn-zhangjiakou**
   * *   **cn-shenzhen**
   * *   **eu-central-1**
   * *   **us-west-1**
   * *   **ap-south-1**
   * *   **ap-southeast-1**
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


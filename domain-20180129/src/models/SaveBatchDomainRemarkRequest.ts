// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchDomainRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * List of instance IDs. We recommend grouping them in sets of **10**, with a maximum of **50** per group, separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * S12344567
   */
  instanceIds?: string;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:  
   * - **zh**: Chinese;  
   * - **en**: English.  
   * 
   * Default value: **en**. This parameter is Required.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Remark information.
   * 
   * @example
   * MyRemarkInfo
   */
  remark?: string;
  /**
   * @remarks
   * User IP address, which can be set to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      lang: 'Lang',
      remark: 'Remark',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      lang: 'string',
      remark: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


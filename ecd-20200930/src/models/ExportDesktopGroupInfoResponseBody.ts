// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDesktopGroupInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 24E05D3E-08F4-551E-B1F0-F6D84EE0BCCC
   */
  requestId?: string;
  /**
   * @remarks
   * The download URL of the XLSX file that contains cloud computer shares. The XLSX file provides the following information:
   * 
   * *   Cloud computer share ID/name
   * *   Office network ID/name
   * *   Cloud computer share template
   * *   vCPUs/Memory size
   * *   System disk/Data disk
   * *   Security policy name
   * *   Number of authorized users
   * *   Billing method
   * *   Creation time
   * *   Expiration time
   * 
   * @example
   * https://cn-hangzhou-servicemanager.oss-cn-hangzhou.aliyuncs.com/A0_DESKTOP/EDS_CloudDesktopGroups_202203********_xBjqdCT***.xlsx?*********
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteDataExportRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are required to perform the operation. Sample code:
   * 
   * ```json
   * {
   *   "mode" : "FAST",   // The mode in which data is exported. Default value: FAST. A value of NORMAL specifies that the export task can be terminated during the export.  "encoding" : "UTF8",  // The encoding format.  "startTime" : "2022-12-22 00:00:00",  // The point in time at which data export starts.  "transaction" : false,    // Specifies whether to enable transactions.  "fileType" : "SQL"    // The format of the exported file.}
   * ```
   * 
   * >  You can also set mode, encoding, and fileType to the following values:
   * 
   * *   mode: NORMAL
   * 
   * *   encoding: UTF8MB4, GB2312, ISO_8859_1, GBK, LATAIN1, or CP1252
   * 
   * *   fileType: XLSX, CSV, JSON, or TXT
   * 
   * @example
   * {    "fileType": "CSV",    "encoding": ""  }
   */
  actionDetail?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to call the API operation.
   * 
   * @example
   * 21400447956867****
   */
  realLoginUserUid?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > : To view the ID of the tenant, log on to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * -1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      actionDetail: 'ActionDetail',
      orderId: 'OrderId',
      realLoginUserUid: 'RealLoginUserUid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderId: 'number',
      realLoginUserUid: 'string',
      tid: 'number',
    };
  }

  validate() {
    if(this.actionDetail) {
      $dara.Model.validateMap(this.actionDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


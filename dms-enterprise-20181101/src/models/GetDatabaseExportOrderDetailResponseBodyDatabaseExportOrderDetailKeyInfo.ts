// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfig } from "./GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfig";


export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the ticket was submitted.
   * 
   * @example
   * 2023-04-13 13:44:59
   */
  auditDate?: string;
  /**
   * @remarks
   * The configuration information about the ticket.
   */
  config?: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfig;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 2583****
   */
  dbId?: number;
  /**
   * @remarks
   * The URL that is used to download the export result.
   * 
   * @example
   * https://oss.xxx.com
   */
  downloadURL?: string;
  static names(): { [key: string]: string } {
    return {
      auditDate: 'AuditDate',
      config: 'Config',
      dbId: 'DbId',
      downloadURL: 'DownloadURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditDate: 'string',
      config: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfig,
      dbId: 'number',
      downloadURL: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


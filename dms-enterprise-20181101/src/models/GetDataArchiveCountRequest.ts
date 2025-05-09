// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataArchiveCountRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the identity. Default value: AS_ADMIN.
   * 
   * @example
   * AS_ADMIN
   */
  orderResultType?: string;
  /**
   * @remarks
   * The plugin type. Default value: DATA_ARCHIVE.
   * 
   * @example
   * DATA_ARCHIVE
   */
  pluginType?: string;
  /**
   * @remarks
   * The time when the ticket is modified or created. The statistics of data archiving tickets are calculated based on the creation time.
   * 
   * @example
   * CREATE_TIME
   */
  searchDateType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * >  To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 2****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderResultType: 'OrderResultType',
      pluginType: 'PluginType',
      searchDateType: 'SearchDateType',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderResultType: 'string',
      pluginType: 'string',
      searchDateType: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


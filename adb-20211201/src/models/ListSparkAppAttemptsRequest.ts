// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSparkAppAttemptsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * > You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query all application IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s202204132018hzprec1ac****
   */
  appId?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-uf6o6m8p6x***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **10** (default)
   * - **50**
   * - **100**
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
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


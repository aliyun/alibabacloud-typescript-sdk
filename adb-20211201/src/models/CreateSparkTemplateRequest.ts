// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSparkTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The templatetype of the application. Valid values:
   * - **SQL**: SQL application
   * - **STREAMING**: streaming application
   * - **BATCH**: batch application
   * 
   * > You do not need to configure this parameter when the application template type is folder.
   * 
   * @example
   * SQL
   */
  appType?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the application template. The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * batchfile
   */
  name?: string;
  /**
   * @remarks
   * The ID of the folder to which the application template belongs.
   * > Call the [GetSparkTemplateFolderTree](https://help.aliyun.com/document_detail/456218.html) operation to query the folder ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  parentId?: number;
  /**
   * @remarks
   * The templatetype of the application template. Valid values:
   * - **folder**: folder
   * - **file**: application
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      DBClusterId: 'DBClusterId',
      name: 'Name',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      DBClusterId: 'string',
      name: 'string',
      parentId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


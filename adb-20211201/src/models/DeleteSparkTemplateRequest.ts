// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSparkTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The directory ID of the template files that you want to delete.
   * 
   * > 
   * 
   * *   You can call the [GetSparkTemplateFullTree](https://help.aliyun.com/document_detail/456205.html) operation to query the directory ID of template files.
   * 
   * *   When you specify a directory ID, the directory and all template files that are included in the directory are deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 725204
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


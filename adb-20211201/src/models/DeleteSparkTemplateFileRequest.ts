// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSparkTemplateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1y769u11748****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the template file to be deleted.
   * 
   * >  You can call the [GetSparkTemplateFullTree](https://help.aliyun.com/document_detail/456205.html) operation to query all template file IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 284
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


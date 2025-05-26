// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkTemplateFileContentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vbn8pq537k8w****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The application template ID.
   * 
   * >  You can call the [GetSparkTemplateFullTree](https://help.aliyun.com/document_detail/456205.html) operation to query the application template ID.
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


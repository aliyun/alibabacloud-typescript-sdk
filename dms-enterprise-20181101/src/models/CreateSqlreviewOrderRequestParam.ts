// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSQLReviewOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * The files to be reviewed. Multiple files can be reviewed at a time.
   * 
   * This parameter is required.
   */
  attachmentKeyList?: string[];
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * >  You can call this operation to query only physical databases. This operation is unavailable to query logical databases.
   * 
   * This parameter is required.
   * 
   * @example
   * 123321
   */
  dbId?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * SQL review for xxx
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentKeyList: 'AttachmentKeyList',
      dbId: 'DbId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKeyList: { 'type': 'array', 'itemType': 'string' },
      dbId: 'number',
      projectName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachmentKeyList)) {
      $dara.Model.validateArray(this.attachmentKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


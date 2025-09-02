// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPublicModelEngineRequest extends $dara.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  projectId?: string;
  /**
   * @remarks
   * The FML statement that is used to query information about objects that are created in Data Modeling. For more information, see [Use FML statements to configure and manage data tables](https://help.aliyun.com/document_detail/298128.html). Only SHOW statements are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * show dim tables
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


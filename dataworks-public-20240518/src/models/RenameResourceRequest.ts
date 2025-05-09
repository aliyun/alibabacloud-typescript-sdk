// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenameResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: number;
  /**
   * @remarks
   * The new name.
   * 
   * This parameter is required.
   * 
   * @example
   * Rename
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


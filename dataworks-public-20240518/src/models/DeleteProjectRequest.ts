// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can obtain the workspace ID from the Workspace Management page in the [DataWorks console](https://dataworks.console.aliyun.com/workspace/list).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


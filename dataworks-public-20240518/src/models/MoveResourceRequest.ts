// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the data development file resource.
   * 
   * >Notice: Before SDK version 8.0.0, this field is of the Long type. In SDK version 8.0.0 and later, this field is of the String type. **This change does not affect the normal use of the SDK. The parameter is still returned based on the type defined in the SDK**. The type change may cause project compilation failures only when you upgrade the SDK across version 8.0.0. In this case, you must manually correct the data type.
   * 
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The destination path for the move operation. Do not include the file resource name in the path.
   * 
   * For example, to change the path of the math.py file to root/demo/math.py, set this parameter to root/demo.
   * 
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the workspace ID.
   * 
   * This parameter specifies the DataWorks workspace for this API operation.
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
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
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


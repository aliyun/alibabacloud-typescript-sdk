// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: number;
  /**
   * @remarks
   * The path to which you want to move the UDF. You do not need to specify a UDF name in the path.
   * 
   * For example, if you want to move the test UDF to root/demo/test, you must set this parameter to root/demo.
   * 
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the ID.
   * 
   * This parameter indicates the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
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
      id: 'number',
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


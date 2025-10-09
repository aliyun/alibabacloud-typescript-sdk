// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComponentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 568780096083*******
   */
  componentId?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec information for this UDF function. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "kind": "Component",
   *     "version": "1.1.2",
   *     "spec": {
   *         "components": [
   *             {
   *                 "id": "568780096083*******",
   *                 "script": {
   *                     "content": "select \\"@@{para1}\\", \\"@@{para2}\\""
   *                 }
   *             }
   *         ]
   *     }
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      projectId: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


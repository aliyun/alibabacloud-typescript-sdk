// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the component. You can use this ID as a request parameter to query the component list or modify a component.
   * 
   * This parameter is required.
   * 
   * @example
   * 123123123123
   */
  componentId?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace used to invoke this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
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


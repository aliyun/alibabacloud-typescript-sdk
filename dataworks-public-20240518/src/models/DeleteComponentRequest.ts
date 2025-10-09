// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The component ID. It can be used as a request parameter for querying the list of production studio components and modifying production studio components.
   * 
   * This parameter is required.
   * 
   * @example
   * 123123123123
   */
  componentId?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter specifies the DataWorks workspace to which the API operation is applied.
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


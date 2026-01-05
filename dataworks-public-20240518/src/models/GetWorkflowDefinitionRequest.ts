// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * 查询结果是否包含工作流内部节点的脚本内容（对于内容较多的节点，可能存在较长的网络传输延时）。
   * 
   * @example
   * false
   */
  includeScriptContent?: boolean;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      includeScriptContent: 'IncludeScriptContent',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      includeScriptContent: 'boolean',
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


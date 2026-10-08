// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * 
   * 
   * 
   * > This field is of type Long in SDK versions earlier than 8.0.0 and String in SDK version 8.0.0 and later. This change does not affect normal SDK usage; the parameter is still returned according to the type defined in the SDK. Upgrading the SDK across version 8.0.0 may cause compilation failures due to the type change. In this case, manually update the data type.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620****
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether the query result includes the script content of internal nodes in the workflow definition. For nodes with large content, this may cause high network transmission latency.
   * 
   * @example
   * false
   */
  includeScriptContent?: boolean;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace management page to query the ID.
   * 
   * 
   * 
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTriggerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The processing templates.
   */
  actionsShrink?: string;
  /**
   * @remarks
   * The ID of the trigger. You can obtain the ID of the trigger from the response of the [CreateTrigger](https://help.aliyun.com/document_detail/479912.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * trigger-9f72636a-0f0c-4baf-ae78-38b27b******
   */
  id?: string;
  /**
   * @remarks
   * The data source configurations.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The custom tags. You can search for or filter asynchronous tasks by custom tag.
   * 
   * @example
   * {"test": "val1"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      actionsShrink: 'Actions',
      id: 'Id',
      inputShrink: 'Input',
      projectName: 'ProjectName',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionsShrink: 'string',
      id: 'string',
      inputShrink: 'string',
      projectName: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


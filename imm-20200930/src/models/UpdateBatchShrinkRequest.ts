// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBatchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of data processing templates.
   */
  actionsShrink?: string;
  /**
   * @remarks
   * The ID of the batch processing task. For more information, see [Create a batch processing task](https://help.aliyun.com/document_detail/606694.html).
   * 
   * This parameter is required.
   * 
   * @example
   * batch-4eb9223f-3e88-42d3-a578-3f2852******
   */
  id?: string;
  /**
   * @remarks
   * The data source configuration.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The project name. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Custom tags used to search for and filter asynchronous tasks.
   * 
   * @example
   * {"key":"val"}
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


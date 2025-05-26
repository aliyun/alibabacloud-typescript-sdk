// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddStoryFilesRequestFiles } from "./AddStoryFilesRequestFiles";


export class AddStoryFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The objects that you want to add.
   * 
   * This parameter is required.
   */
  files?: AddStoryFilesRequestFiles[];
  /**
   * @remarks
   * The ID of the story.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      files: 'Files',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': AddStoryFilesRequestFiles },
      objectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


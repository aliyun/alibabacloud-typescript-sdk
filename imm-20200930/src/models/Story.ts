// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";
import { File } from "./File";


export class Story extends $dara.Model {
  /**
   * @remarks
   * The addresses.
   */
  addresses?: Address[];
  /**
   * @remarks
   * The story cover.
   */
  cover?: File;
  /**
   * @remarks
   * The time when the story was created.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The custom ID.
   * 
   * @example
   * test
   */
  customId?: string;
  /**
   * @remarks
   * The custom labels.
   * 
   * @example
   * {"key": "val"}
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The fluster IDs.
   */
  figureClusterIds?: string[];
  /**
   * @remarks
   * The story files.
   */
  files?: File[];
  /**
   * @remarks
   * The ID of the story object.
   * 
   * @example
   * id1
   */
  objectId?: string;
  /**
   * @remarks
   * The type of the object.
   * 
   * @example
   * story
   */
  objectType?: string;
  /**
   * @remarks
   * The ID of the owner to which the story belongs.
   * 
   * @example
   * 102321002****
   */
  ownerId?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The time when the story ends.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  storyEndTime?: string;
  /**
   * @remarks
   * The name of the story.
   * 
   * @example
   * name1
   */
  storyName?: string;
  /**
   * @remarks
   * The time when the story starts.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  storyStartTime?: string;
  /**
   * @remarks
   * The subtype of the story.
   * 
   * @example
   * ImportantPerson
   */
  storySubType?: string;
  /**
   * @remarks
   * The story type.
   * 
   * @example
   * PeopleMemory
   */
  storyType?: string;
  /**
   * @remarks
   * The time when the story was updated.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      cover: 'Cover',
      createTime: 'CreateTime',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      figureClusterIds: 'FigureClusterIds',
      files: 'Files',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      storyEndTime: 'StoryEndTime',
      storyName: 'StoryName',
      storyStartTime: 'StoryStartTime',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': Address },
      cover: File,
      createTime: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      figureClusterIds: { 'type': 'array', 'itemType': 'string' },
      files: { 'type': 'array', 'itemType': File },
      objectId: 'string',
      objectType: 'string',
      ownerId: 'string',
      projectName: 'string',
      storyEndTime: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(Array.isArray(this.figureClusterIds)) {
      $dara.Model.validateArray(this.figureClusterIds);
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


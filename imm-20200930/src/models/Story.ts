// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";
import { File } from "./File";


export class Story extends $dara.Model {
  addresses?: Address[];
  cover?: File;
  createTime?: string;
  customId?: string;
  customLabels?: { [key: string]: any };
  datasetName?: string;
  figureClusterIds?: string[];
  files?: File[];
  objectId?: string;
  objectType?: string;
  ownerId?: string;
  projectName?: string;
  storyEndTime?: string;
  storyName?: string;
  storyStartTime?: string;
  storySubType?: string;
  storyType?: string;
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


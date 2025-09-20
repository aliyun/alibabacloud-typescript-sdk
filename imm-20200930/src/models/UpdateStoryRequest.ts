// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStoryRequestCover extends $dara.Model {
  /**
   * @remarks
   * The URI of the cover image.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * @example
   * oss://bucket1/object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryRequest extends $dara.Model {
  /**
   * @remarks
   * The cover image of the story.
   */
  cover?: UpdateStoryRequestCover;
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
   * The custom tags. You can specify up to 100 custom tags.
   * 
   * @example
   * {"key": "value"}
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The name of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * testdata
   */
  datasetName?: string;
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
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the story.
   * 
   * @example
   * newstory
   */
  storyName?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      storyName: 'StoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: UpdateStoryRequestCover,
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
      storyName: 'string',
    };
  }

  validate() {
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


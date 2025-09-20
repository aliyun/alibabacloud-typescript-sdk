// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomizedStoryRequestCover extends $dara.Model {
  /**
   * @remarks
   * The URI of the cover image.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket1/cover
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

export class CreateCustomizedStoryRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The URIs of the files.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"URI":"oss://bucket1/file1"}]
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

export class CreateCustomizedStoryRequest extends $dara.Model {
  /**
   * @remarks
   * The cover image of the story. You can specify an image as the cover image of the custom story.
   * 
   * This parameter is required.
   */
  cover?: CreateCustomizedStoryRequestCover;
  /**
   * @remarks
   * The custom labels. You can specify labels to help you identify and retrieve the story.
   * 
   * @example
   * {"Bucket": "examplebucket"}
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The name of the dataset.[](~~478160~~)
   * 
   * This parameter is required.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The files of the story. You can specify up to 100 files in a custom story.
   * 
   * This parameter is required.
   */
  files?: CreateCustomizedStoryRequestFiles[];
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
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
   * This parameter is required.
   * 
   * @example
   * name1
   */
  storyName?: string;
  /**
   * @remarks
   * The subtype of the story. For information about valid subtypes, see [Story types and subtypes](https://help.aliyun.com/document_detail/2743998.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Solo
   */
  storySubType?: string;
  /**
   * @remarks
   * The type of the story. For information about valid types, see [Story types and subtypes](https://help.aliyun.com/document_detail/2743998.html).
   * 
   * This parameter is required.
   * 
   * @example
   * PeopleMemory
   */
  storyType?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      files: 'Files',
      projectName: 'ProjectName',
      storyName: 'StoryName',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: CreateCustomizedStoryRequestCover,
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': CreateCustomizedStoryRequestFiles },
      projectName: 'string',
      storyName: 'string',
      storySubType: 'string',
      storyType: 'string',
    };
  }

  validate() {
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
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


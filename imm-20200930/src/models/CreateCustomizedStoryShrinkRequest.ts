// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomizedStoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cover image of the story. You can specify an image as the cover image of the custom story.
   * 
   * This parameter is required.
   */
  coverShrink?: string;
  /**
   * @remarks
   * The custom labels. You can specify labels to help you identify and retrieve the story.
   * 
   * @example
   * {"Bucket": "examplebucket"}
   */
  customLabelsShrink?: string;
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
  filesShrink?: string;
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
      coverShrink: 'Cover',
      customLabelsShrink: 'CustomLabels',
      datasetName: 'DatasetName',
      filesShrink: 'Files',
      projectName: 'ProjectName',
      storyName: 'StoryName',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverShrink: 'string',
      customLabelsShrink: 'string',
      datasetName: 'string',
      filesShrink: 'string',
      projectName: 'string',
      storyName: 'string',
      storySubType: 'string',
      storyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


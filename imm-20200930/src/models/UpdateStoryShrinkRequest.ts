// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cover image of the story.
   */
  coverShrink?: string;
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
  customLabelsShrink?: string;
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
      coverShrink: 'Cover',
      customId: 'CustomId',
      customLabelsShrink: 'CustomLabels',
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      storyName: 'StoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverShrink: 'string',
      customId: 'string',
      customLabelsShrink: 'string',
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
      storyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


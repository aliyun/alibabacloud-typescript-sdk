// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the story. IMM filters candidate photos to generate a story based on the value of this parameter. This parameter takes effect only if you set StoryType to TravelMemory.
   * 
   * >  If you are located in Hong Kong (China), Macao (China), Taiwan (China), or overseas, you cannot specify an address in the Chinese mainland by using this parameter.
   */
  addressShrink?: string;
  /**
   * @remarks
   * The custom ID. A custom ID of a generated story may differ from the value of ObjectID and can be utilized for subsequent retrieval and sorting of stories.
   * 
   * @example
   * test
   */
  customId?: string;
  /**
   * @remarks
   * The custom labels. Labels specify the custom information of the story. This enables retrieval based on your business requirements.
   * 
   * @example
   * {"Bucket": "examplebucket"}
   */
  customLabelsShrink?: string;
  /**
   * @remarks
   * The name of the dataset. For information about how to obtain the name of a dataset, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The maximum number of photo files in the story. The actual number of photo files ranges from the value of MinFileCount to the value of MaxFileCount. The value of this parameter must be an integer greater than the value of MinFileCount. To provide the desired effect, the algorithm limits the maximum number of photo files to 1,500. If you set MaxFileCount to a value greater than 1,500, this parameter does not take effect.
   * 
   * @example
   * 3
   */
  maxFileCount?: number;
  /**
   * @remarks
   * The minimum number of photo files in the story. The actual number of photo files ranges from the value of MinFileCount to the value of MaxFileCount. The value of this parameter must be an integer greater than 1. If the actual number of candidate photos is less than the value of this parameter, a null story is returned.
   * 
   * @example
   * 1
   */
  minFileCount?: number;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The topic name of the asynchronous reverse notification.
   * 
   * @example
   * test-topic
   */
  notifyTopicName?: string;
  /**
   * @remarks
   * The ID of the story. This parameter is optional. If you leave this parameter empty, IMM assigns a unique identifier to the story. You can query and update a story based on its ID. You can also manually create an ID for a story. After you create an ID for a story, you must specify this parameter to pass the ID into the system. This way, IMM can record the ID as the unique identifier of the story. If you pass an existing ID into the system, IMM updates the story that corresponds to the ID.
   * 
   * @example
   * id1
   */
  objectId?: string;
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
   * The end time of the photo collection for which you want to create the story. StoryStartTime and StoryEndTime form a time interval based on which IMM filters candidate photos to generate a story. The value must be a string in the RFC3339 format.
   * 
   * @example
   * 2021-12-30T16:00:00Z
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
   * The start time of the photo collection for which you want to create the story. StoryStartTime and StoryEndTime form a time interval based on which IMM filters candidate photos to generate a story. The value must be a string in the RFC3339 format.
   * 
   * @example
   * 2016-12-30T16:00:00Z
   */
  storyStartTime?: string;
  /**
   * @remarks
   * The subtype of the story. For information about valid subtypes, see [Story types and subtypes](https://help.aliyun.com/document_detail/2743998.html).
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
  /**
   * @remarks
   * The tags. You can specify this parameter in one of the following scenarios:
   * 
   * *   Specify tags as custom data, which is returned in messages provided by Simple Message Queue.
   * *   Search for tasks by tag.
   * *   Specify tags as variables in destination URIs.
   * 
   * @example
   * {"key":"val"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The custom information, which is returned as asynchronous notifications to facilitate notification management in your system. The maximum information length is 2,048 bytes.
   * 
   * @example
   * {"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      addressShrink: 'Address',
      customId: 'CustomId',
      customLabelsShrink: 'CustomLabels',
      datasetName: 'DatasetName',
      maxFileCount: 'MaxFileCount',
      minFileCount: 'MinFileCount',
      notificationShrink: 'Notification',
      notifyTopicName: 'NotifyTopicName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      storyEndTime: 'StoryEndTime',
      storyName: 'StoryName',
      storyStartTime: 'StoryStartTime',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
      tagsShrink: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressShrink: 'string',
      customId: 'string',
      customLabelsShrink: 'string',
      datasetName: 'string',
      maxFileCount: 'number',
      minFileCount: 'number',
      notificationShrink: 'string',
      notifyTopicName: 'string',
      objectId: 'string',
      projectName: 'string',
      storyEndTime: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
      tagsShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


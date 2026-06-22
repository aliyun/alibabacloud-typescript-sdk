// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressForStory } from "./AddressForStory";
import { Notification } from "./Notification";


export class CreateStoryRequest extends $dara.Model {
  /**
   * @remarks
   * The address information for the story. IMM filters photos whose shooting locations match the specified address to generate the story. This parameter takes effect only when StoryType is set to TravelMemory.
   * 
   * > Due to regulatory requirements, parsing GPS information into addresses is not supported in Hong Kong (China), Macao (China), Taiwan (China), or regions outside of mainland China.
   */
  address?: AddressForStory;
  /**
   * @remarks
   * A custom identifier for the story. This ID can be different from ObjectId. You can use this ID to retrieve or sort stories.
   * 
   * @example
   * test
   */
  customId?: string;
  /**
   * @remarks
   * The custom labels. These labels contain custom information about the story and can be used for retrieval.
   * 
   * @example
   * {"Bucket": "examplebucket"}
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The name of the dataset. For more information, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The maximum number of photos in the generated story. The actual number of photos is between the values of MinFileCount and MaxFileCount. The value must be an integer greater than the value of MinFileCount. To ensure the quality of the generated story, the internal algorithm limits the maximum number of photos to 1,500. If you set MaxFileCount to a value greater than 1,500, the setting does not take effect.
   * 
   * @example
   * 3
   */
  maxFileCount?: number;
  /**
   * @remarks
   * The minimum number of photos in the generated story. The actual number of photos is between the values of MinFileCount and MaxFileCount. The value must be an integer greater than 1. If the number of available candidate photos is less than this value, an empty story is returned.
   * 
   * @example
   * 1
   */
  minFileCount?: number;
  /**
   * @remarks
   * The notification configuration. For more information about the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The name of the topic for asynchronous notifications.
   * 
   * @example
   * test-topic
   */
  notifyTopicName?: string;
  /**
   * @remarks
   * The ID for the story object. This parameter is optional. If you do not specify an ID, IMM generates one. You can use the story ID to query or update the story. If you specify an ID that already exists, the corresponding story is updated.
   * 
   * @example
   * id1
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The end time of the photo collection for the story. This parameter and StoryStartTime define a time range. IMM filters candidate photos within this time range to generate the story. The value must be a string in the RFC 3339 format.
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
   * The start time of the photo collection for the story. This parameter and StoryEndTime define a time range. IMM filters candidate photos within this time range to generate the story. The value must be a string in the RFC 3339 format.
   * 
   * @example
   * 2016-12-30T16:00:00Z
   */
  storyStartTime?: string;
  /**
   * @remarks
   * The subtype of the story to generate. For more information about story subtypes and their valid values, see [Story types and subtypes](https://help.aliyun.com/document_detail/2743998.html).
   * 
   * @example
   * Solo
   */
  storySubType?: string;
  /**
   * @remarks
   * The type of the story to generate. For more information about story types and their valid values, see [Story types and subtypes](https://help.aliyun.com/document_detail/2743998.html).
   * 
   * This parameter is required.
   * 
   * @example
   * PeopleMemory
   */
  storyType?: string;
  /**
   * @remarks
   * This parameter provides a tagging mechanism that can be used in the following scenarios:
   * 
   * - Set custom data that is returned in MNS messages.
   * 
   * - Use as a search condition to search for tasks.
   * 
   * - Use as a variable in TargetURI.
   * 
   * @example
   * {"key":"val"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The custom information that is returned in an asynchronous notification message. You can use this information to associate the notification message with your services. The maximum length is 2,048 bytes.
   * 
   * @example
   * {"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      maxFileCount: 'MaxFileCount',
      minFileCount: 'MinFileCount',
      notification: 'Notification',
      notifyTopicName: 'NotifyTopicName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      storyEndTime: 'StoryEndTime',
      storyName: 'StoryName',
      storyStartTime: 'StoryStartTime',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
      tags: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: AddressForStory,
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      maxFileCount: 'number',
      minFileCount: 'number',
      notification: Notification,
      notifyTopicName: 'string',
      objectId: 'string',
      projectName: 'string',
      storyEndTime: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userData: 'string',
    };
  }

  validate() {
    if(this.address && typeof (this.address as any).validate === 'function') {
      (this.address as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


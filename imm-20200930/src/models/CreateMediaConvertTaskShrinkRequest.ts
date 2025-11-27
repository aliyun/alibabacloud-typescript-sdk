// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaConvertTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * When performing media concatenation, the index of the primary media file (which provides the default transcoding parameters for `Video` and `Audio`, including resolution, frame rate, etc.) in the concatenation list. The default value is 0 (aligning with the first media file in the concatenation list).
   * 
   * @example
   * 0
   */
  alignmentIndex?: number;
  /**
   * @remarks
   * **If there are no special requirements, please leave this blank.**
   * 
   * Chain authorization configuration. For more information, see [Using Chain Authorization to Access Other Entity Resources](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * Notification configuration. For details, click Notification. The format of asynchronous notification messages can be found in [Asynchronous Notification Message Format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The name of the project. For how to obtain it, see [Creating a Project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * A list of media files. If the list contains more than one element, it indicates that the Concat (concatenation) function is enabled. The Concat order follows the sequence of the input video file URIs.
   * 
   * This parameter is required.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * Custom tags used for searching and filtering asynchronous tasks.
   * 
   * @example
   * {"test":"val1"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * List of media processing tasks, supporting multiple task configurations.
   * 
   * This parameter is required.
   */
  targetsShrink?: string;
  /**
   * @remarks
   * User-defined information that will be returned in asynchronous message notifications, used for convenient association and processing within your system. The maximum length is 2048 bytes.
   * 
   * @example
   * {"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      alignmentIndex: 'AlignmentIndex',
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
      targetsShrink: 'Targets',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignmentIndex: 'number',
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
      targetsShrink: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHighlightTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The China authorization configuration. **Leave this parameter empty unless you have specific requirements.**.
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The editing configuration.
   */
  editShrink?: string;
  /**
   * @remarks
   * The highlight configuration.
   */
  highlightShrink?: string;
  /**
   * @remarks
   * The highlight recognition mode. Valid values:
   * 
   * - Scene: scene and frame recognition.
   * 
   * - Average (default): average slice recognition.
   * 
   * @example
   * Average
   */
  mode?: string;
  /**
   * @remarks
   * The message notification configuration. For more information, click Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://www.alibabacloud.com/help/en/imm/developer-reference/asynchronous-notification-message-examples).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The output configuration.
   * 
   * This parameter is required.
   */
  outputShrink?: string;
  /**
   * @remarks
   * The project name.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The list of media resources to process.
   * A maximum of 10 videos are supported.
   * 
   * This parameter is required.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * The custom tags used to search for and filter asynchronous tasks.
   * 
   * @example
   * {"test":"val1"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The processing type. Valid values:
   * 
   * - Retrieval: highlight extraction.
   * 
   * - Concat: video composition.
   * 
   * - Compose: one-click video creation.
   * 
   * This parameter is required.
   * 
   * @example
   * Retrieval
   */
  type?: string;
  /**
   * @remarks
   * The custom user data, which is returned in asynchronous message notifications.
   * 
   * @example
   * {"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      editShrink: 'Edit',
      highlightShrink: 'Highlight',
      mode: 'Mode',
      notificationShrink: 'Notification',
      outputShrink: 'Output',
      projectName: 'ProjectName',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
      type: 'Type',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      editShrink: 'string',
      highlightShrink: 'string',
      mode: 'string',
      notificationShrink: 'string',
      outputShrink: 'string',
      projectName: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
      type: 'string',
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


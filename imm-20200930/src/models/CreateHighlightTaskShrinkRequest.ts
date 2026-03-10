// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHighlightTaskShrinkRequest extends $dara.Model {
  credentialConfigShrink?: string;
  editShrink?: string;
  highlightShrink?: string;
  /**
   * @example
   * Average
   */
  mode?: string;
  notificationShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outputShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourcesShrink?: string;
  /**
   * @example
   * {"test":"val1"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Retrieval
   */
  type?: string;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_topic
   */
  topicName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      topicName: 'TopicName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      topicName: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


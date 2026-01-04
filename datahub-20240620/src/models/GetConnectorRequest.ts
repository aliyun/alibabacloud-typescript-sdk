// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c5e07a96-5069-4486-87c3-0d281951f772
   */
  connectorId?: string;
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
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      projectName: 'ProjectName',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      projectName: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


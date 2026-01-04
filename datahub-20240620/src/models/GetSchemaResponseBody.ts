// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemaResponseBody extends $dara.Model {
  /**
   * @example
   * 1724041098000
   */
  createTime?: number;
  /**
   * @example
   * 1559031978056215
   */
  creator?: string;
  /**
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @example
   * [{\\"Type\\":\\"STRING\\",\\"AllowNull\\":true,\\"Name\\":\\"context\\"}]
   */
  recordSchema?: string;
  /**
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * test_topic
   */
  topicName?: string;
  /**
   * @example
   * 0
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      projectName: 'ProjectName',
      recordSchema: 'RecordSchema',
      requestId: 'RequestId',
      success: 'Success',
      topicName: 'TopicName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      projectName: 'string',
      recordSchema: 'string',
      requestId: 'string',
      success: 'boolean',
      topicName: 'string',
      versionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


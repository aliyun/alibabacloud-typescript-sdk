// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemasResponseBodyList extends $dara.Model {
  /**
   * @example
   * 1708171905000
   */
  createTime?: number;
  /**
   * @example
   * 1048133943212399
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

export class ListSchemasResponseBody extends $dara.Model {
  list?: ListSchemasResponseBodyList[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 9892074a2a89600ae4b0d5a34fb99a3f
   */
  nextToken?: string;
  /**
   * @example
   * 20250401102332e68e3d0b04ab4904
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListSchemasResponseBodyList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


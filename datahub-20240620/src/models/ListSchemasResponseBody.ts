// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemasResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1708171905000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the schema.
   * 
   * @example
   * 1048133943212399
   */
  creator?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The schema data corresponding to the version ID.
   * 
   * @example
   * [{\\"Type\\":\\"STRING\\",\\"AllowNull\\":true,\\"Name\\":\\"context\\"}]
   */
  recordSchema?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * test_topic
   */
  topicName?: string;
  /**
   * @remarks
   * The schema version ID.
   * 
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
  /**
   * @remarks
   * The list of schemas.
   */
  list?: ListSchemasResponseBodyList[];
  /**
   * @remarks
   * The maximum number of records returned in this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. If NextToken is empty, no more results are available. If NextToken has a value, the value indicates the token for the next query.
   * 
   * @example
   * 9892074a2a89600ae4b0d5a34fb99a3f
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20250401102332e68e3d0b04ab4904
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A compatibility field. The V2 response does not return MaxResults.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A compatibility field. The V2 response does not return a message array.
   * 
   * @example
   * []
   */
  messages?: { [key: string]: any }[];
  /**
   * @remarks
   * A compatibility field. The V2 response does not return NextToken.
   * 
   * @example
   * CAES...
   */
  nextToken?: string;
  /**
   * @remarks
   * The pre-signed download URL for the Pipeline file a2a-snapshot.json. The URL is valid for 1800 seconds.
   * 
   * @example
   * https://oss.example/a2a-snapshot.json?signature=REDACTED
   */
  pipelineSnapshotDownloadUrl?: string;
  /**
   * @remarks
   * The OpenAPI request ID.
   * 
   * @example
   * 4C68F7A5-2D16-5C8F-A4B1-01E9C6A9B0D2
   */
  requestId?: string;
  /**
   * @remarks
   * The pre-signed download URL for the session messages file session.jsonl. The URL is valid for 1800 seconds.
   * 
   * @example
   * https://oss.example/session.jsonl?signature=REDACTED
   */
  sessionMessagesDownloadUrl?: string;
  /**
   * @remarks
   * The session title. This value may be empty.
   * 
   * @example
   * Create VPC template
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      messages: 'Messages',
      nextToken: 'NextToken',
      pipelineSnapshotDownloadUrl: 'PipelineSnapshotDownloadUrl',
      requestId: 'RequestId',
      sessionMessagesDownloadUrl: 'SessionMessagesDownloadUrl',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      messages: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      nextToken: 'string',
      pipelineSnapshotDownloadUrl: 'string',
      requestId: 'string',
      sessionMessagesDownloadUrl: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


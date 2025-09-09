// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactBuildLogsResponseBodyBuildLogs extends $dara.Model {
  /**
   * @example
   * NDAx
   */
  content?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1738894304
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactBuildLogsResponseBody extends $dara.Model {
  buildLogs?: ListArtifactBuildLogsResponseBodyBuildLogs[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAVEKMJSB4yFi/EJc7fOJCkw=
   */
  nextToken?: string;
  /**
   * @example
   * 708AB976-F69C-5727-BED9-8C39D878B93A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildLogs: 'BuildLogs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildLogs: { 'type': 'array', 'itemType': ListArtifactBuildLogsResponseBodyBuildLogs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildLogs)) {
      $dara.Model.validateArray(this.buildLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


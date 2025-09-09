// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceBuildLogsResponseBodyBuildLogs extends $dara.Model {
  /**
   * @example
   * BuildArtifact
   */
  buildStep?: string;
  /**
   * @example
   * build log
   */
  content?: string;
  /**
   * @example
   * yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      buildStep: 'BuildStep',
      content: 'Content',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildStep: 'string',
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

export class ListServiceBuildLogsResponseBody extends $dara.Model {
  buildLogs?: ListServiceBuildLogsResponseBodyBuildLogs[];
  /**
   * @example
   * AAAAAW8kZY+u1sYOaYf5JmgmDQQ=
   */
  nextToken?: string;
  /**
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildLogs: 'BuildLogs',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildLogs: { 'type': 'array', 'itemType': ListServiceBuildLogsResponseBodyBuildLogs },
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


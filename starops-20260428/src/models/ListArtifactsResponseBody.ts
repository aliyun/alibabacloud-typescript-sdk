// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactsResponseBodyArtifacts extends $dara.Model {
  /**
   * @example
   * false
   */
  isDirectory?: boolean;
  /**
   * @example
   * 2026-04-30T16:03:54Z
   */
  lastModified?: string;
  /**
   * @example
   * missions/mission-xxx/artifacts/2026-05/05-01/xxxx.md
   */
  path?: string;
  /**
   * @example
   * 21950
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      isDirectory: 'isDirectory',
      lastModified: 'lastModified',
      path: 'path',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDirectory: 'boolean',
      lastModified: 'string',
      path: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBody extends $dara.Model {
  /**
   * @example
   * [{"path":"reports/summary.pdf","size":1024,"lastModified":"2026-05-25T08:00:00Z","isDirectory":false}]
   */
  artifacts?: ListArtifactsResponseBodyArtifacts[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'artifacts',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': ListArtifactsResponseBodyArtifacts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


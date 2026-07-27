// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactsResponseBodyArtifacts extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the item is a directory. A value of `true` indicates a directory and `false` indicates a file.
   * 
   * @example
   * false
   */
  isDirectory?: boolean;
  /**
   * @remarks
   * The time the artifact was last modified, in UTC.
   * 
   * @example
   * 2026-04-30T16:03:54Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The path of the artifact.
   * 
   * @example
   * missions/mission-xxx/artifacts/2026-05/05-01/xxxx.md
   */
  path?: string;
  /**
   * @remarks
   * The size of the artifact in bytes.
   * 
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
   * @remarks
   * The list of artifacts.
   * 
   * @example
   * [{"path":"reports/summary.pdf","size":1024,"lastModified":"2026-05-25T08:00:00Z","isDirectory":false}]
   */
  artifacts?: ListArtifactsResponseBodyArtifacts[];
  /**
   * @remarks
   * The maximum number of results returned on the current page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. This parameter is returned only if more results are available. To retrieve the next page, use this token in the `nextToken` query parameter of your next request.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
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


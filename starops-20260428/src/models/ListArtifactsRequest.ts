// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactsRequest extends $dara.Model {
  /**
   * @remarks
   * The artifact path from which to list artifacts. If this parameter is not specified, artifacts are listed from the root directory.
   * 
   * This parameter is required.
   * 
   * @example
   * missions/mission-xxx/artifacts/2026-05/05-01/
   */
  artifactPath?: string;
  /**
   * @remarks
   * The maximum number of results to return. If more results are available, the response includes a `nextToken` to retrieve the next page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. You can obtain this token from the `nextToken` parameter of a previous response.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifactPath: 'artifactPath',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactPath: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


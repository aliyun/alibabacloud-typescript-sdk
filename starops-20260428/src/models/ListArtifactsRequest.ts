// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * missions/mission-xxx/artifacts/2026-05/05-01/
   */
  artifactPath?: string;
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


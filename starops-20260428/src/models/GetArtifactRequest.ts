// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The path to the artifact.
   * 
   * This parameter is required.
   * 
   * @example
   * missions/mission-xxx/artifacts/2026-05/05-01/xxxx.md
   */
  artifactPath?: string;
  static names(): { [key: string]: string } {
    return {
      artifactPath: 'artifactPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


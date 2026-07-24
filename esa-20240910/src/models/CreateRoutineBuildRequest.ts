// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineBuildRequest extends $dara.Model {
  /**
   * @remarks
   * The OSS object URL. This parameter is required in upload mode but is not required in git mode.
   * 
   * @example
   * https://bucket.oss-.aliyuncs.com/key
   */
  artifactUrl?: string;
  /**
   * @remarks
   * The name of the branch to build. This parameter is not required in upload mode but is required in git mode.
   * 
   * @example
   * main
   */
  branch?: string;
  /**
   * @remarks
   * The ER name.
   * 
   * This parameter is required.
   * 
   * @example
   * rwa-test
   */
  routineName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactUrl: 'ArtifactUrl',
      branch: 'Branch',
      routineName: 'RoutineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactUrl: 'string',
      branch: 'string',
      routineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


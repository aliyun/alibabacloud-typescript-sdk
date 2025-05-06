// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterVersionResponseBodyDBRevisionVersionList extends $dara.Model {
  /**
   * @remarks
   * The release notes for the database engine revision version.
   * 
   * @example
   * ReleaseNote
   */
  releaseNote?: string;
  /**
   * @remarks
   * The release status of the database engine revision version. Valid values:
   * 
   * *   **Stable**: The database engine revision version is stable.
   * *   **Old**: The database engine revision version is outdated. We recommend that you do not update the database engine to this revision version.
   * *   **HighRisk**: The database engine revision version has critical defects. We recommend that you do not update the database engine to this revision version.
   * *   **Beta**: The database engine revision version is a Beta version.
   * 
   * @example
   * Stable
   */
  releaseType?: string;
  /**
   * @remarks
   * The code of the database engine revision version. You can use the code to specify the database engine revision version.
   * 
   * @example
   * 20230707
   */
  revisionVersionCode?: string;
  /**
   * @remarks
   * The database engine revision version number.
   * 
   * @example
   * 8.0.1.1.35.1
   */
  revisionVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
      releaseType: 'ReleaseType',
      revisionVersionCode: 'RevisionVersionCode',
      revisionVersionName: 'RevisionVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: 'string',
      releaseType: 'string',
      revisionVersionCode: 'string',
      revisionVersionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationAvailableVersionResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The release date.
   * 
   * @example
   * 2019-08-01T00:00:00Z
   */
  releaseDate?: string;
  /**
   * @remarks
   * The release notes of the version.
   * 
   * @example
   * release
   */
  releaseNote?: string;
  /**
   * @remarks
   * The release type.
   * 
   * @example
   * Stable
   */
  releaseType?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0.2
   */
  version?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * 1.0.2
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      releaseDate: 'ReleaseDate',
      releaseNote: 'ReleaseNote',
      releaseType: 'ReleaseType',
      version: 'Version',
      versionDescription: 'VersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseDate: 'string',
      releaseNote: 'string',
      releaseType: 'string',
      version: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The latest version.
   * 
   * @example
   * 1.0.2
   */
  latestVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The list of versions.
   */
  versions?: DescribeApplicationAvailableVersionResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      latestVersion: 'LatestVersion',
      requestId: 'RequestId',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestVersion: 'string',
      requestId: 'string',
      versions: { 'type': 'array', 'itemType': DescribeApplicationAvailableVersionResponseBodyVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


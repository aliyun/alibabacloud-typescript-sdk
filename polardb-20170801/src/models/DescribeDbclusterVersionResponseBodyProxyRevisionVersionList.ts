// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterVersionResponseBodyProxyRevisionVersionList extends $dara.Model {
  /**
   * @remarks
   * The release notes for the PolarProxy revision version.
   * 
   * @example
   * ReleaseNote
   */
  releaseNote?: string;
  /**
   * @remarks
   * The release type. Valid values:
   * 
   * *   **LTS**: a long-term version
   * *   **BETA**: a preview version
   * 
   * @example
   * LTS
   */
  releaseType?: string;
  /**
   * @remarks
   * The PolarProxy revision version code. You can use this code to specify the PolarProxy revision version.
   * 
   * @example
   * 20230707
   */
  revisionVersionCode?: string;
  /**
   * @remarks
   * The PolarProxy revision version number.
   * 
   * @example
   * 2.8.24
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


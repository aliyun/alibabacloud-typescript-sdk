// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupabaseUpdateVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The latest upgradable version.
   * 
   * @example
   * 20240731
   */
  latestVersion?: string;
  /**
   * @remarks
   * The ID of the Supabase project.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The recommended stable version for upgrade.
   * 
   * @example
   * 20240630
   */
  stableVersion?: string;
  static names(): { [key: string]: string } {
    return {
      latestVersion: 'LatestVersion',
      projectId: 'ProjectId',
      requestId: 'RequestId',
      stableVersion: 'StableVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestVersion: 'string',
      projectId: 'string',
      requestId: 'string',
      stableVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


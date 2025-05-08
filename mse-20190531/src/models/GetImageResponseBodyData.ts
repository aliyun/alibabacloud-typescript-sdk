// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The full version number of the current instance image. The parameter is in the X.X.X.X format.
   * 
   * @example
   * 3.5.5.0
   */
  currentVersionFullShowName?: string;
  /**
   * @remarks
   * The URL of the changelog for the maximum version to which the current version can be upgraded.
   * 
   * @example
   * https://xxxxx
   */
  maxVersionChangelogUrl?: string;
  /**
   * @remarks
   * The code of the maximum version to which the current version can be upgraded.
   * 
   * @example
   * ZooKeeper_3_6_3
   */
  maxVersionCode?: string;
  /**
   * @remarks
   * The full number of the maximum version to which the current version can be upgraded.
   * 
   * @example
   * 3.6.3.0
   */
  maxVersionFullShowName?: string;
  static names(): { [key: string]: string } {
    return {
      currentVersionFullShowName: 'CurrentVersionFullShowName',
      maxVersionChangelogUrl: 'MaxVersionChangelogUrl',
      maxVersionCode: 'MaxVersionCode',
      maxVersionFullShowName: 'MaxVersionFullShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersionFullShowName: 'string',
      maxVersionChangelogUrl: 'string',
      maxVersionCode: 'string',
      maxVersionFullShowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


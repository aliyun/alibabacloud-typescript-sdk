// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeByUrlRequestOption extends $dara.Model {
  /**
   * @example
   * false
   */
  withPermissionRole?: boolean;
  /**
   * @example
   * false
   */
  withStatisticalInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      withPermissionRole: 'WithPermissionRole',
      withStatisticalInfo: 'WithStatisticalInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withPermissionRole: 'boolean',
      withStatisticalInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


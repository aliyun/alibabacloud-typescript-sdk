// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonReleasesRequest extends $dara.Model {
  /**
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @example
   * policy-xxxxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      parentAddonReleaseId: 'parentAddonReleaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      parentAddonReleaseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


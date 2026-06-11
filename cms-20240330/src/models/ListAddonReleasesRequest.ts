// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonReleasesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  maxResults?: string;
  nextToken?: string;
  /**
   * @remarks
   * The parent AddonRelease ID.
   * 
   * @example
   * policy-xxxxxxxxxxxxx
   */
  parentAddonReleaseId?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      parentAddonReleaseId: 'parentAddonReleaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      maxResults: 'string',
      nextToken: 'string',
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


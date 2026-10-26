// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonReleasesRequest extends $dara.Model {
  /**
   * @remarks
   * The add-on name.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The next token for pagination.
   */
  nextToken?: string;
  /**
   * @remarks
   * The parent add-on release ID.
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


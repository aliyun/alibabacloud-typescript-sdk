// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppCodeWorkspaceDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Site ID
   * 
   * @example
   * 1071596645435968
   */
  siteId?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


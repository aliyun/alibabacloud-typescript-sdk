// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSiteRequest extends $dara.Model {
  securityToken?: string;
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


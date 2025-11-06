// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserAccessTokenForPartnerRequest extends $dara.Model {
  siteHost?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2f68fe1e-d9d5-4803-94d0-2fc81032e91d
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      siteHost: 'SiteHost',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteHost: 'string',
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


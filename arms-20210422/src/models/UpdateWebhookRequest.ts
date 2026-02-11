// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebhookRequest extends $dara.Model {
  body?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactId?: number;
  contactName?: string;
  httpHeaders?: string;
  httpParams?: string;
  method?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contactId: 'ContactId',
      contactName: 'ContactName',
      httpHeaders: 'HttpHeaders',
      httpParams: 'HttpParams',
      method: 'Method',
      regionId: 'RegionId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      contactId: 'number',
      contactName: 'string',
      httpHeaders: 'string',
      httpParams: 'string',
      method: 'string',
      regionId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


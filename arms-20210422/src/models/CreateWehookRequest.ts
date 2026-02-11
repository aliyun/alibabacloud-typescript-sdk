// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWehookRequest extends $dara.Model {
  body?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactName?: string;
  httpHeaders?: string;
  httpParams?: string;
  method?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
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


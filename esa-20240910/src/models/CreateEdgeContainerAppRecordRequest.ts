// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The associated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      recordName: 'RecordName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      recordName: 'string',
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


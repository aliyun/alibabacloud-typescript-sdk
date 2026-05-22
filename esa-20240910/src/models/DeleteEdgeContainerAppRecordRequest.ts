// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEdgeContainerAppRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordName?: string;
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


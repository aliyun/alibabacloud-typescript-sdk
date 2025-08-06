// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVodRealtimeLogDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  logstore?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  project?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      logstore: 'Logstore',
      ownerId: 'OwnerId',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      logstore: 'string',
      ownerId: 'number',
      project: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


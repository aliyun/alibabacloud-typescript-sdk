// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableLiveRealtimeLogDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain for which you want to suspend real-time log delivery. Separate multiple streaming domains with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


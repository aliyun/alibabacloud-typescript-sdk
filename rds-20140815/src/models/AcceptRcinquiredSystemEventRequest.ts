// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptRCInquiredSystemEventRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the system event.
   * 
   * This parameter is required.
   * 
   * @example
   * e-2zeielxl1qzq8slb****
   * 
   * **if can be null:**
   * true
   */
  eventId?: string;
  /**
   * @remarks
   * The region ID of the system event.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   * 
   * **if can be null:**
   * true
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
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


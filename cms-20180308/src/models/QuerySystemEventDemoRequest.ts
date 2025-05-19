// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySystemEventDemoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  eventName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  product?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      product: 'string',
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


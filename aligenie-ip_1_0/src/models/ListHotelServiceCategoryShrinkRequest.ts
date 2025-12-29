// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelServiceCategoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


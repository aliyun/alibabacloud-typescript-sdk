// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElectronicItineraryBatchApplyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applyItineraryListShrink?: string;
  /**
   * @example
   * true
   */
  canReprint?: boolean;
  static names(): { [key: string]: string } {
    return {
      applyItineraryListShrink: 'apply_itinerary_list',
      canReprint: 'can_reprint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyItineraryListShrink: 'string',
      canReprint: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ElectronicItineraryBatchApplyRequestApplyItineraryList } from "./ElectronicItineraryBatchApplyRequestApplyItineraryList";


export class ElectronicItineraryBatchApplyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applyItineraryList?: ElectronicItineraryBatchApplyRequestApplyItineraryList[];
  /**
   * @example
   * true
   */
  canReprint?: boolean;
  static names(): { [key: string]: string } {
    return {
      applyItineraryList: 'apply_itinerary_list',
      canReprint: 'can_reprint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyItineraryList: { 'type': 'array', 'itemType': ElectronicItineraryBatchApplyRequestApplyItineraryList },
      canReprint: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.applyItineraryList)) {
      $dara.Model.validateArray(this.applyItineraryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


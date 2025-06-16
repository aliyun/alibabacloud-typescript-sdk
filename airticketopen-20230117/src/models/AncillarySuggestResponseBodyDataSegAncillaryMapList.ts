// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary } from "./AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary";


export class AncillarySuggestResponseBodyDataSegAncillaryMapList extends $dara.Model {
  /**
   * @remarks
   * Ancillary product
   */
  ancillary?: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary;
  /**
   * @remarks
   * Segment ID list, these segments share the same ancillary
   */
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      ancillary: 'ancillary',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillary: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary,
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.ancillary && typeof (this.ancillary as any).validate === 'function') {
      (this.ancillary as any).validate();
    }
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


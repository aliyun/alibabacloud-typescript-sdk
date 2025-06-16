// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AncillarySuggestResponseBodyDataSegAncillaryMapList } from "./AncillarySuggestResponseBodyDataSegAncillaryMapList";


export class AncillarySuggestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * ancillary detail list
   */
  segAncillaryMapList?: AncillarySuggestResponseBodyDataSegAncillaryMapList[];
  /**
   * @remarks
   * solution_id, equals to solution_id in request
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      segAncillaryMapList: 'seg_ancillary_map_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segAncillaryMapList: { 'type': 'array', 'itemType': AncillarySuggestResponseBodyDataSegAncillaryMapList },
      solutionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.segAncillaryMapList)) {
      $dara.Model.validateArray(this.segAncillaryMapList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


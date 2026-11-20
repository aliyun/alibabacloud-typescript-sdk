// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectedDataStrategy extends $dara.Model {
  /**
   * @remarks
   * The end time of the statistical window in UNIX seconds.
   * 
   * @example
   * 1735660800
   */
  endTime?: number;
  /**
   * @remarks
   * The list of evaluation IDs.
   * 
   * @example
   * ["2646a9380bba3c86371f55a0226322941794983634"]
   */
  evalIds?: string[];
  /**
   * @remarks
   * The estimated start time in milliseconds.
   * 
   * > You can modify this parameter only when the course is in the preview state.
   * 
   * @example
   * 1735574400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      evalIds: 'evalIds',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      evalIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.evalIds)) {
      $dara.Model.validateArray(this.evalIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


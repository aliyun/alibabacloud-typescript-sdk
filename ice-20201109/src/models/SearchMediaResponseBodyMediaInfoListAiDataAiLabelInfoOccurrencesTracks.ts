// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks extends $dara.Model {
  /**
   * @remarks
   * The coordinates of the bounding box.
   * 
   * @example
   * 468.0;67.0;615.0;267.0
   */
  position?: string;
  /**
   * @remarks
   * The size of the bounding box.
   * 
   * @example
   * 50.2
   */
  size?: number;
  /**
   * @remarks
   * The timestamp of the track.
   * 
   * @example
   * 1.4
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      position: 'Position',
      size: 'Size',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      position: 'string',
      size: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the MPS queue.
   * 
   * Valid values:
   * 
   * *   Boost: MPS queue with transcoding speed boosted.
   * *   Standard: standard MPS queue.
   * *   NarrowBandHDV2: MPS queue that supports Narrowband HD 2.0.
   * 
   * @example
   * Standard
   */
  speed?: string;
  static names(): { [key: string]: string } {
    return {
      speed: 'Speed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      speed: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


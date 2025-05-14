// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the MPS queue.
   * 
   * This parameter is required.
   * 
   * @example
   * test-pipeline
   */
  name?: string;
  /**
   * @remarks
   * The priority. Default value: 6. Valid values: 1 to 10. A greater value specifies a higher priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The type of the MPS queue. Valid values:
   * 
   * 1.  Standard: standard MPS queue.
   * 2.  Boost: MPS queue with transcoding speed boosted.
   * 3.  NarrowBandHDV2: MPS queue that supports Narrowband HD 2.0.
   * 
   * This parameter is required.
   * 
   * @example
   * Standard
   */
  speed?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      priority: 'Priority',
      speed: 'Speed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      priority: 'number',
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


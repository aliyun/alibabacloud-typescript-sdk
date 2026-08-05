// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The pipeline name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-pipeline
   */
  name?: string;
  /**
   * @remarks
   * The priority, ranging from 1 to 10. Default value: 6. A larger value indicates a higher priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The pipeline type. Valid values:
   * 
   * - Standard: standard pipeline.
   * 
   * - Boost: double-speed transcoding pipeline.
   * 
   * - NarrowBandHDV2: Narrowband HD 2.0 pipeline.
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


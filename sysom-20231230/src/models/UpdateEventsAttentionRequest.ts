// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventsAttentionRequest extends $dara.Model {
  /**
   * @remarks
   * Sensitivity of the anomalous activity. Valid values are -1 to 3. A value of -1 decreases sensitivity by 1 degree, and a value of 0 increases sensitivity by 1 degree.
   * 
   * @example
   * -1
   */
  mode?: number;
  /**
   * @remarks
   * Scope of effect: cluster or edge zone
   * 
   * @example
   * cluster
   */
  range?: string;
  /**
   * @remarks
   * UUID corresponding to the anomalous activity
   * 
   * This parameter is required.
   * 
   * @example
   * 03de78af-f49f-433d-b5b1-0f6a70c493ba
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      range: 'range',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
      range: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


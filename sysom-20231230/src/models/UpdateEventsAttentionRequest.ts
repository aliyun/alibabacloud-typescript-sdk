// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventsAttentionRequest extends $dara.Model {
  /**
   * @remarks
   * The sensitivity of the anomaly event. Valid values: -1 to 3. A value of -1 indicates that the sensitivity is decreased by 1. A value of 0 indicates that the sensitivity is increased by 1.
   * 
   * @example
   * -1
   */
  mode?: number;
  /**
   * @remarks
   * The scope in which the update takes effect. Valid values: cluster and node.
   * 
   * @example
   * cluster
   */
  range?: string;
  /**
   * @remarks
   * The UUID of the anomaly event.
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


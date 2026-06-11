// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggTaskGroupStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the aggregation task group. Valid values are "Running" and "Stopped". The default value is Running.
   * 
   * This parameter is required.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


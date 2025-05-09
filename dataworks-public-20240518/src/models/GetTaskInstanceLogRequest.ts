// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskInstanceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The sequence number of an instance run. Minimum value: 1. By default, the latest run is used.
   * 
   * @example
   * 1
   */
  runNumber?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      runNumber: 'RunNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      runNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


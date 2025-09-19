// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlarmMachineCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request source. Set the value to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


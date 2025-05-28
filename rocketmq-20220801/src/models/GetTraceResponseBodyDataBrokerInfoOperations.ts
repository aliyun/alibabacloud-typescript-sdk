// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceResponseBodyDataBrokerInfoOperations extends $dara.Model {
  /**
   * @remarks
   * Operation time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  operateTime?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * @example
   * ADD
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      operateTime: 'operateTime',
      operateType: 'operateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateTime: 'string',
      operateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


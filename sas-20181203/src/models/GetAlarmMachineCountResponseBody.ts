// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlarmMachineCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of servers on which alerts are generated.
   * 
   * @example
   * 1
   */
  machineCount?: number;
  static names(): { [key: string]: string } {
    return {
      machineCount: 'MachineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmMachineCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetAlarmMachineCountResponseBodyData;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6D3A2E7D-1238-5DD4-B3C3-BF06FCAD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAlarmMachineCountResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


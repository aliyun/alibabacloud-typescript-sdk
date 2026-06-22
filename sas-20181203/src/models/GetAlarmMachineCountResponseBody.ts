// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlarmMachineCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of servers that have security alerts.
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
   * The data details.
   */
  data?: GetAlarmMachineCountResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
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


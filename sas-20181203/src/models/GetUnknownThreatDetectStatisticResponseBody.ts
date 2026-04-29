// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUnknownThreatDetectStatisticResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  blockMachineCount?: number;
  /**
   * @example
   * 1
   */
  machineCount?: number;
  /**
   * @example
   * 1
   */
  monitorMachineCount?: number;
  /**
   * @example
   * 1
   */
  openMachineCount?: number;
  /**
   * @example
   * 1
   */
  studyingMachineCount?: number;
  static names(): { [key: string]: string } {
    return {
      blockMachineCount: 'BlockMachineCount',
      machineCount: 'MachineCount',
      monitorMachineCount: 'MonitorMachineCount',
      openMachineCount: 'OpenMachineCount',
      studyingMachineCount: 'StudyingMachineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockMachineCount: 'number',
      machineCount: 'number',
      monitorMachineCount: 'number',
      openMachineCount: 'number',
      studyingMachineCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnknownThreatDetectStatisticResponseBody extends $dara.Model {
  data?: GetUnknownThreatDetectStatisticResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD394AF6-591E-5168-8C8C-4C7847******
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
      data: GetUnknownThreatDetectStatisticResponseBodyData,
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


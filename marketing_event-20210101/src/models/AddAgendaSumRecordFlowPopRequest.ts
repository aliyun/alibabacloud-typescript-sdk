// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAgendaSumRecordFlowPopRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  activeNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  agendaId?: number;
  /**
   * @example
   * 90.81
   */
  attendancePercent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1784443333333
   */
  flowTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 云栖大会主论坛
   */
  sessionName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  totalPv?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8
   */
  totalUv?: number;
  static names(): { [key: string]: string } {
    return {
      activeNum: 'ActiveNum',
      agendaId: 'AgendaId',
      attendancePercent: 'AttendancePercent',
      flowTime: 'FlowTime',
      sessionName: 'SessionName',
      totalPv: 'TotalPv',
      totalUv: 'TotalUv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeNum: 'number',
      agendaId: 'number',
      attendancePercent: 'string',
      flowTime: 'number',
      sessionName: 'string',
      totalPv: 'number',
      totalUv: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


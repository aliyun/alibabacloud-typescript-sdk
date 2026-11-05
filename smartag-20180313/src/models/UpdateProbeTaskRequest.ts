// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProbeTaskRequest extends $dara.Model {
  domain?: string;
  enable?: boolean;
  packetNumber?: number;
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  probeTaskId?: string;
  probeTaskSourceAddress?: string;
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sagId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sn?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
      packetNumber: 'PacketNumber',
      port: 'Port',
      probeTaskId: 'ProbeTaskId',
      probeTaskSourceAddress: 'ProbeTaskSourceAddress',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
      packetNumber: 'number',
      port: 'number',
      probeTaskId: 'string',
      probeTaskSourceAddress: 'string',
      protocol: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


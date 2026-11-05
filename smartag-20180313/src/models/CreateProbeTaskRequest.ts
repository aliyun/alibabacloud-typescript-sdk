// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProbeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enable?: boolean;
  packetNumber?: number;
  port?: number;
  probeTaskSourceAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
      packetNumber: 'PacketNumber',
      port: 'Port',
      probeTaskSourceAddress: 'ProbeTaskSourceAddress',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
      taskName: 'TaskName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
      packetNumber: 'number',
      port: 'number',
      probeTaskSourceAddress: 'string',
      protocol: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
      taskName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


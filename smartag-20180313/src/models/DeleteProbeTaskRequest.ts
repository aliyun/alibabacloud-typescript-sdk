// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProbeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  probeTaskId?: string;
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
  static names(): { [key: string]: string } {
    return {
      probeTaskId: 'ProbeTaskId',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probeTaskId: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


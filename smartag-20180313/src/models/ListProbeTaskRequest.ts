// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProbeTaskRequest extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  probeTaskId?: string;
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  sagId?: string;
  sagName?: string;
  sn?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      probeTaskId: 'ProbeTaskId',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sagId: 'SagId',
      sagName: 'SagName',
      sn: 'Sn',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      probeTaskId: 'string',
      protocol: 'string',
      regionId: 'string',
      sagId: 'string',
      sagName: 'string',
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


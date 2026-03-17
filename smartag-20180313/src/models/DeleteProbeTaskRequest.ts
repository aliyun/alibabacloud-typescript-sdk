// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProbeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the probe task.
   * 
   * This parameter is required.
   * 
   * @example
   * probe-****
   */
  probeTaskId?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway (SAG) instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-****
   */
  sagId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sag****
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


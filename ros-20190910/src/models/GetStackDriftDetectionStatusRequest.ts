// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackDriftDetectionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the drift detection operation.
   * 
   * You can call the [ListStackResourceDrifts](https://help.aliyun.com/document_detail/155098.html) operation to obtain the ID of the drift detection operation.
   * 
   * This parameter is required.
   * 
   * @example
   * a7044f0d-6f2e-4128-a307-4524ef88****
   */
  driftDetectionId?: string;
  /**
   * @remarks
   * The region ID of the stack to be detected for drift.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      driftDetectionId: 'DriftDetectionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


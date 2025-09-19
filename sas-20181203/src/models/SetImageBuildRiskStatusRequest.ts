// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetImageBuildRiskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The UUIDs of images. Separate multiple UUIDs with commas (,).
   * 
   * >  You can call the [DescribeImageInstances](~~DescribeImageInstances~~) operation to query the UUIDs of images.
   * 
   * @example
   * f382fccd88b94c5c8c864def681*****,ac32fccd88b94c5c8c864def681*****
   */
  imageUuids?: string;
  /**
   * @remarks
   * The keyword of the image build command risk.
   * 
   * @example
   * risk.type
   */
  riskKey?: string;
  /**
   * @remarks
   * The status of the image build command risk. Valid values:
   * 
   * *   **0**: unhandled.
   * *   **1**: ignored.
   * *   **2**: false positive.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      imageUuids: 'ImageUuids',
      riskKey: 'RiskKey',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUuids: 'string',
      riskKey: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


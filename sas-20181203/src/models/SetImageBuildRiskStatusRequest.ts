// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetImageBuildRiskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The image UUIDs. Separate multiple UUIDs with commas (,).
   * >Call the [DescribeImageInstances](~~DescribeImageInstances~~) operation to obtain this parameter.
   * 
   * @example
   * f382fccd88b94c5c8c864def681*****,ac32fccd88b94c5c8c864def681*****
   */
  imageUuids?: string;
  /**
   * @remarks
   * The risk keyword.
   * 
   * @example
   * risk.type
   */
  riskKey?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - **0**: Unhandled.
   * - **1**: Ignored.
   * - **2**: False positive.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSasTrialShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the access control instance. You can call the DescribeRegions operation to query the region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request.
   */
  sdkRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequestShrink: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequestShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


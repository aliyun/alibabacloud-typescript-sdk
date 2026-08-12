// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePostPaidBindRelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request parameters.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCanTrySasRequestSdkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the request is from the ECS console. Valid values:
   * - **true**: The request is from the ECS console.
   * - **false**: The request is not from the ECS console.
   * 
   * @example
   * true
   */
  fromEcs?: boolean;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: zh. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      fromEcs: 'FromEcs',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromEcs: 'boolean',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCanTrySasRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-guangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request parameters.
   */
  sdkRequest?: GetCanTrySasRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: GetCanTrySasRequestSdkRequest,
    };
  }

  validate() {
    if(this.sdkRequest && typeof (this.sdkRequest as any).validate === 'function') {
      (this.sdkRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


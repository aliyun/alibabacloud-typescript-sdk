// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidDeductInstancesRequestSdkRequest extends $dara.Model {
  /**
   * @example
   * sas_cspm_dp_cn-***80001
   */
  instanceId?: string;
  /**
   * @example
   * sas_vul_dp_cn
   */
  modules?: string;
  /**
   * @example
   * Available
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      modules: 'Modules',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      modules: 'string',
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

export class GetValidDeductInstancesRequest extends $dara.Model {
  /**
   * @example
   * cn-fuzhou
   */
  regionId?: string;
  sdkRequest?: GetValidDeductInstancesRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: GetValidDeductInstancesRequestSdkRequest,
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


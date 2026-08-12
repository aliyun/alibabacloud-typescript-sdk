// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSasTrialRequestSdkRequestRequestForm extends $dara.Model {
  /**
   * @remarks
   * The reason for applying for the trial.
   * 
   * @example
   * for poc
   */
  tryReason?: string;
  static names(): { [key: string]: string } {
    return {
      tryReason: 'TryReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tryReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSasTrialRequestSdkRequest extends $dara.Model {
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
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The reason for applying for the trial.
   */
  requestForm?: CreateSasTrialRequestSdkRequestRequestForm;
  /**
   * @remarks
   * The trial type. Valid values:
   * - **0**: trial not allowed
   * - **1**: first trial
   * - **2**: second trial
   * 
   * 
   * > Call the [GetCanTrySas](https://help.aliyun.com/document_detail/2623574.html) operation to obtain this parameter. The trial can be started only when the value is not 0.
   * 
   * @example
   * 1
   */
  tryType?: number;
  /**
   * @remarks
   * The trial edition. Valid values:
   * - **3**: Enterprise Edition.
   * - **7**: Ultimate Edition.
   * 
   * > Call the [GetCanTrySas](https://help.aliyun.com/document_detail/2623574.html) operation to obtain this parameter.
   * 
   * @example
   * 3
   */
  tryVersion?: number;
  static names(): { [key: string]: string } {
    return {
      fromEcs: 'FromEcs',
      lang: 'Lang',
      requestForm: 'RequestForm',
      tryType: 'TryType',
      tryVersion: 'TryVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromEcs: 'boolean',
      lang: 'string',
      requestForm: CreateSasTrialRequestSdkRequestRequestForm,
      tryType: 'number',
      tryVersion: 'number',
    };
  }

  validate() {
    if(this.requestForm && typeof (this.requestForm as any).validate === 'function') {
      (this.requestForm as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSasTrialRequest extends $dara.Model {
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
  sdkRequest?: CreateSasTrialRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: CreateSasTrialRequestSdkRequest,
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


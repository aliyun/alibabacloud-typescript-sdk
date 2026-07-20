// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSasTrialRequestSdkRequestRequestForm extends $dara.Model {
  /**
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
   * @example
   * true
   */
  fromEcs?: boolean;
  /**
   * @example
   * en
   */
  lang?: string;
  requestForm?: CreateSasTrialRequestSdkRequestRequestForm;
  /**
   * @example
   * 1
   */
  tryType?: number;
  /**
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
   * @example
   * cn-shenzhen
   */
  regionId?: string;
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


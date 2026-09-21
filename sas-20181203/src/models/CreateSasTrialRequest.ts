// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSasTrialRequestRequestForm extends $dara.Model {
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

export class CreateSasTrialRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests must use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. true: performs only a dry run without performing the actual request. false: performs the actual request. Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the request is from the ECS console. Valid values:
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  fromEcs?: boolean;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The reason for applying for the trial. This parameter is required for a second trial.
   */
  requestForm?: CreateSasTrialRequestRequestForm;
  /**
   * @remarks
   * The trial type. Valid values:
   * - **0**: Trial is not allowed.
   * - **1**: First trial.
   * - **2**: Second trial.
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
   * >Call the [GetCanTrySas](https://help.aliyun.com/document_detail/2623574.html) operation to obtain this parameter.
   * 
   * @example
   * 7
   */
  tryVersion?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fromEcs: 'FromEcs',
      lang: 'Lang',
      requestForm: 'RequestForm',
      tryType: 'TryType',
      tryVersion: 'TryVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      fromEcs: 'boolean',
      lang: 'string',
      requestForm: CreateSasTrialRequestRequestForm,
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


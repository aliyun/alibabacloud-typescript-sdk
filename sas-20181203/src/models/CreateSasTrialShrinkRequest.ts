// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSasTrialShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether the request is from the ECS console. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The reason for applying for a trial. This parameter is required for a second trial.
   */
  requestFormShrink?: string;
  /**
   * @remarks
   * The trial type. Valid values:
   * - **0**: trial not allowed.
   * - **1**: first trial.
   * - **2**: second trial.
   * 
   * 
   * > Call the [GetCanTrySas](https://help.aliyun.com/document_detail/2623574.html) operation to obtain this parameter. A trial can be started only when the value is not 0.
   * 
   * @example
   * 1
   */
  tryType?: number;
  /**
   * @remarks
   * The trial version. Valid values:
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
      fromEcs: 'FromEcs',
      lang: 'Lang',
      requestFormShrink: 'RequestForm',
      tryType: 'TryType',
      tryVersion: 'TryVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      fromEcs: 'boolean',
      lang: 'string',
      requestFormShrink: 'string',
      tryType: 'number',
      tryVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


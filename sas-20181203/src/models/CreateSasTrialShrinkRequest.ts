// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSasTrialShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure request idempotence. Use a different token for each request. Only ASCII characters are supported. The token can be up to 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for this request. Valid values: true: performs only a dry run without executing the actual operation. false: executes the request normally. Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the request originates from the ECS console. Valid values:
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * true
   */
  fromEcs?: boolean;
  /**
   * @remarks
   * The language of the request and response messages. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The reason for applying for a trial. A reason is required for a second trial.
   */
  requestFormShrink?: string;
  /**
   * @remarks
   * The trial type. Valid values:
   * - **0**: Trial not allowed.
   * - **1**: First-time trial.
   * - **2**: Second trial.
   * 
   * > Call the [GetCanTrySas](https://help.aliyun.com/document_detail/2623574.html) operation to retrieve this parameter. You can start a trial only when this value is not 0.
   * 
   * @example
   * 1
   */
  tryType?: number;
  /**
   * @remarks
   * The trial edition. Valid values:
   * - **3**: Enterprise Edition
   * - **7**: Ultimate Edition
   * 
   * >Call the [GetCanTrySas](https://help.aliyun.com/document_detail/2623574.html) operation to retrieve this parameter.
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
      requestFormShrink: 'RequestForm',
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


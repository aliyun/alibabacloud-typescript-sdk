// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSasTrialShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the request is redirected from the Elastic Compute Service (ECS) console. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  fromEcs?: boolean;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The reason why you apply for the trial. You must specify the reason for the second trial.
   */
  requestFormShrink?: string;
  /**
   * @remarks
   * The trial type. Valid values:
   * 
   * *   **0**: trial prohibited
   * *   **1**: first trial
   * *   **2**: second trial
   * 
   * >  You can call the [GetCanTrySas](https://help.aliyun.com/document_detail/2623574.html) operation to obtain the trial type. You can start a trial only if this parameter is not set to 0.
   * 
   * @example
   * 1
   */
  tryType?: number;
  /**
   * @remarks
   * The trial edition. Valid values:
   * 
   * *   **3**: Enterprise
   * *   **7**: Ultimate
   * 
   * >  You can call the [GetCanTrySas](https://help.aliyun.com/document_detail/2623574.html) operation to obtain the trial edition.
   * 
   * @example
   * 7
   */
  tryVersion?: number;
  static names(): { [key: string]: string } {
    return {
      fromEcs: 'FromEcs',
      lang: 'Lang',
      requestFormShrink: 'RequestForm',
      tryType: 'TryType',
      tryVersion: 'TryVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


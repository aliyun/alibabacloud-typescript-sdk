// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelDeploymentProfilesRequest extends $dara.Model {
  /**
   * @example
   * cmu-biz
   */
  bizKey?: string;
  /**
   * @example
   * 1.0.0
   */
  modelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      bizKey: 'BizKey',
      modelVersion: 'ModelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizKey: 'string',
      modelVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


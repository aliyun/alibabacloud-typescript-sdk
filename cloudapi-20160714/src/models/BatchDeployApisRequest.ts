// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchDeployApisRequestApi } from "./BatchDeployApisRequestApi";


export class BatchDeployApisRequest extends $dara.Model {
  /**
   * @remarks
   * The APIs that you want to publish.
   */
  api?: BatchDeployApisRequestApi[];
  /**
   * @remarks
   * The description.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  securityToken?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **TEST**
   * *   PRE: the pre-release environment
   * 
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      description: 'Description',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: { 'type': 'array', 'itemType': BatchDeployApisRequestApi },
      description: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.api)) {
      $dara.Model.validateArray(this.api);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


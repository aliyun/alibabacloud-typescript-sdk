// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig";


export class DescribeBackendInfoResponseBodyBackendInfoBackendModels extends $dara.Model {
  /**
   * @remarks
   * The backend service configurations.
   */
  backendConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig;
  /**
   * @remarks
   * The ID of the backend service in the environment.
   * 
   * @example
   * 5c4995d08e8b4954b0f326e8e4f2b97d
   */
  backendModelId?: string;
  /**
   * @remarks
   * The description of the backend service.
   * 
   * @example
   * testDvs 1
   */
  description?: string;
  /**
   * @remarks
   * The time when the backend service was created.
   * 
   * @example
   * 2021-12-20T03:22:03.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the backend service was modified.
   * 
   * @example
   * 2021-12-20T03:22:03.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the environment.
   * 
   * @example
   * 6fc978bb63574146b766863dd7bdf661
   */
  stageModeId?: string;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'BackendConfig',
      backendModelId: 'BackendModelId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      stageModeId: 'StageModeId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig,
      backendModelId: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      stageModeId: 'string',
      stageName: 'string',
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


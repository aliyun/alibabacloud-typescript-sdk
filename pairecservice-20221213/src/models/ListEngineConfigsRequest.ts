// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEngineConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * - **Daily**: the development and test environment.
   * 
   * - **Pre**: the pre-production environment.
   * 
   * - **Prod**: the production environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. To obtain this ID, call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the engine configuration.
   * 
   * @example
   * engine_config_v1
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status to filter by. Valid values:
   * 
   * - **Released**: returns only released configurations.
   * 
   * - **Unreleased**: returns only unreleased configurations.
   * 
   * @example
   * Released
   */
  status?: string;
  /**
   * @remarks
   * The version to filter by.
   * 
   * Set this parameter to `latest` to retrieve the most recently updated version.
   * 
   * @example
   * latest
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


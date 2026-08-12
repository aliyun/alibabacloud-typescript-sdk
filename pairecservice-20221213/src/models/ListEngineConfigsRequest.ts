// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEngineConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The runtime environment.
   * 
   * - Daily: daily environment.
   * 
   * - Pre: staging environment.
   * 
   * - Prod: production environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. You can obtain the instance ID by calling the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @remarks
   * The engine configuration name.
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
   * The status filter.
   * 
   * - Released: released.
   * 
   * - Unreleased: not released.
   * 
   * @example
   * Released
   */
  status?: string;
  /**
   * @remarks
   * The version filter.
   * 
   * latest: the most recently updated version.
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


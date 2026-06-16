// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The model type. Valid values:
   * 
   * - `system`: A built-in model.
   * 
   * - `deployment`: A model from a custom deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * system
   */
  modelType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
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
   * The cloud provider. Currently, only Alibaba Cloud is supported.
   * 
   * @example
   * Aliyun
   */
  provider?: string;
  /**
   * @remarks
   * The provider type.
   * 
   * @example
   * providerType
   */
  providerType?: string;
  workspaceId?: string;
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      modelType: 'modelType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      provider: 'provider',
      providerType: 'providerType',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      provider: 'string',
      providerType: 'string',
      workspaceId: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


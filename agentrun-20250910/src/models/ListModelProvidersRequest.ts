// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the model to filter by.
   * 
   * @example
   * aa
   */
  modelName?: string;
  /**
   * @remarks
   * The model type to filter by. Valid values:
   * 
   * - `system`: A system model.
   * 
   * - `deployment`: A custom deployment model.
   * 
   * @example
   * pop
   */
  modelType?: string;
  /**
   * @remarks
   * The page number to retrieve.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of results to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The cloud provider. To specify Alibaba Cloud, use the value \\"Aliyun\\".
   * 
   * @example
   * Aliyun
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      modelType: 'modelType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      modelType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


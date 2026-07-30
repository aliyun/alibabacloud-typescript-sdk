// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiModelProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI gateway instance. The target instance must exist, belong to the current account, and be of the AI gateway type.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-8c13d2b4f8a1
   */
  gatewayId?: string;
  /**
   * @remarks
   * The page number. Default value: 1. The value must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: 1 to 500.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The fuzzy match condition for the model provider identifier. If left empty, all model providers under the current gateway are queried.
   * 
   * @example
   * qwen
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiModelCardsRequest extends $dara.Model {
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
   * The fuzzy match keyword for the model provider identifier or model name. If left empty, all model cards under the current gateway are queried.
   * 
   * @example
   * qwen
   */
  keyword?: string;
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
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


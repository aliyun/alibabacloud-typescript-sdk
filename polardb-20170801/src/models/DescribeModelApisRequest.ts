// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelApisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The IDs of the model APIs. Separate multiple IDs with a comma.
   * 
   * @example
   * mi-xxx,mi-xxxx
   */
  modelApiIds?: string;
  /**
   * @remarks
   * The model category. Valid values:
   * 
   * - **text**
   * 
   * - **embedding**
   * 
   * - **rerank**
   * 
   * @example
   * text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The name of the model API.
   * 
   * @example
   * testName
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
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   *   The default value is **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The API path prefix.
   * 
   * @example
   * /test
   */
  pathPrefix?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * - **openai**
   * 
   * - **anthropic**
   * 
   * - **bailian**
   * 
   * - **vllm**
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The model API status.
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gwClusterId: 'GwClusterId',
      modelApiIds: 'ModelApiIds',
      modelCategory: 'ModelCategory',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pathPrefix: 'PathPrefix',
      protocol: 'Protocol',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gwClusterId: 'string',
      modelApiIds: 'string',
      modelCategory: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pathPrefix: 'string',
      protocol: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


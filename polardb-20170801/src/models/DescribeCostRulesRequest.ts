// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The model name, such as `gpt-4` or `qwen-turbo`.
   * 
   * @example
   * qwen3-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model service ID.
   * 
   * @example
   * ms-xxxxxx
   */
  modelServiceId?: string;
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
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      gwClusterId: 'GwClusterId',
      modelName: 'ModelName',
      modelServiceId: 'ModelServiceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gwClusterId: 'string',
      modelName: 'string',
      modelServiceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


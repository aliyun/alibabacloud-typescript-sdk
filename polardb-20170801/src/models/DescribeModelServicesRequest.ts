// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelServicesRequest extends $dara.Model {
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
   * The model category.
   * 
   * @example
   * text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The IDs of the model services. Separate multiple IDs with a comma (,).
   * 
   * @example
   * ms-xxx,ms-xxxx
   */
  modelServiceIds?: string;
  /**
   * @remarks
   * The name of the model service.
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
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **openai**
   * 
   * - **anthropic**
   * 
   * - **bailian**: Models from Model Studio.
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
   * The status of the model service.
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gwClusterId: 'GwClusterId',
      modelCategory: 'ModelCategory',
      modelServiceIds: 'ModelServiceIds',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocol: 'Protocol',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gwClusterId: 'string',
      modelCategory: 'string',
      modelServiceIds: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelApisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @example
   * mi-xxx,mi-xxxx
   */
  modelApiIds?: string;
  /**
   * @example
   * text
   */
  modelCategory?: string;
  /**
   * @example
   * testName
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * /test
   */
  pathPrefix?: string;
  /**
   * @example
   * openai
   */
  protocol?: string;
  regionId?: string;
  /**
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


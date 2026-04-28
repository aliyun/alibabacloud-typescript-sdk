// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAdvisorCostCheckRequest extends $dara.Model {
  assumeAliyunIdList?: number[];
  checkIds?: string[];
  checkPlanId?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * false
   */
  refreshResource?: boolean;
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdList: 'AssumeAliyunIdList',
      checkIds: 'CheckIds',
      checkPlanId: 'CheckPlanId',
      product: 'Product',
      refreshResource: 'RefreshResource',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunIdList: { 'type': 'array', 'itemType': 'number' },
      checkIds: { 'type': 'array', 'itemType': 'string' },
      checkPlanId: 'number',
      product: 'string',
      refreshResource: 'boolean',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.assumeAliyunIdList)) {
      $dara.Model.validateArray(this.assumeAliyunIdList);
    }
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


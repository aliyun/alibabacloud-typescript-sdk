// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobScoreReportsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of request IDs to exclude from the feature comparison.
   */
  excludeRequestIds?: string[];
  /**
   * @remarks
   * The ID of the instance. To obtain the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      excludeRequestIds: 'ExcludeRequestIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRequestIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeRequestIds)) {
      $dara.Model.validateArray(this.excludeRequestIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


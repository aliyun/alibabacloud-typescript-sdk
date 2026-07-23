// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobScoreReportsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of request IDs to exclude from the feature comparison.
   */
  excludeRequestIdsShrink?: string;
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
      excludeRequestIdsShrink: 'ExcludeRequestIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRequestIdsShrink: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


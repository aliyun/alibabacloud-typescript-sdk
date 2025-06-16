// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcPublishedRouteEntriesResponseBodyRouteEntriesRoutePublishTargets extends $dara.Model {
  /**
   * @example
   * Published
   */
  publishStatus?: string;
  publishTargetInstanceId?: string;
  /**
   * @example
   * ECR
   */
  publishTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      publishStatus: 'PublishStatus',
      publishTargetInstanceId: 'PublishTargetInstanceId',
      publishTargetType: 'PublishTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishStatus: 'string',
      publishTargetInstanceId: 'string',
      publishTargetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


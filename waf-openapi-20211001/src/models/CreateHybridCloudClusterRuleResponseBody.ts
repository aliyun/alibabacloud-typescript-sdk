// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridCloudClusterRuleResponseBody extends $dara.Model {
  /**
   * @example
   * hdbc-clusterrule-*******m0w
   */
  clusterRuleResourceId?: string;
  /**
   * @example
   * 66A98669-CC6E-4F3E-*****-3014697B11AE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterRuleResourceId: 'ClusterRuleResourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterRuleResourceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmAppRagWeightRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_a2eb4e04b48041108edb1f6de815
   */
  appId?: string;
  rankWeights?: { [key: string]: number };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-6uhm7nfev4k8pwcz
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rankWeights: 'RankWeights',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rankWeights: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.rankWeights) {
      $dara.Model.validateMap(this.rankWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


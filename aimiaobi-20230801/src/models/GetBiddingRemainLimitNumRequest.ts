// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBiddingRemainLimitNumRequest extends $dara.Model {
  /**
   * @example
   * asyncUploadTenderDoc
   */
  apiName?: string;
  /**
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


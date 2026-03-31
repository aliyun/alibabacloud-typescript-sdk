// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * ProductionId
   */
  productionId?: string;
  /**
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @example
   * llm-zna577pdximvztk5
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      productionId: 'ProductionId',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productionId: 'string',
      requestId: 'string',
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


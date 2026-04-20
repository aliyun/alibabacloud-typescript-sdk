// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmAppRagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_c617650fbd9e49e8916189e23c62
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  status?: boolean;
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
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      status: 'boolean',
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


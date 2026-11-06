// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceAcrRamAuthorizeUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACR Enterprise instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-1234567890abcdef
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The ACR namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the ACR image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-image
   */
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      namespace: 'namespace',
      repository: 'repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      namespace: 'string',
      repository: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


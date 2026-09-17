// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyWorkspaceAcrRamAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The ACR Enterprise instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-1234567890abcdef
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The target ACR namespace, which corresponds to Agent artifact.container.namespace. This is not a Kubernetes namespace. Together with the instance and repository, it determines the authorization scope.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  namespace?: string;
  /**
   * @remarks
   * The target repository name, which corresponds to Agent artifact.container.repo. It does not include a tag, namespace, or path separator. Wildcards are not accepted.
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


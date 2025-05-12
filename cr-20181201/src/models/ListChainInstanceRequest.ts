// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChainInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set this parameter to **ListChainInstance**.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the delivery chain started.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The time when the delivery chain is completed.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the delivery chain.
   * 
   * @example
   * test-namespace
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


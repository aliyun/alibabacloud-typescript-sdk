// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterKubeconfigStatesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the list of KubeConfigs for cloud service roles in the cluster.
   * 
   * Valid values:
   * - true: Queries the list of KubeConfigs for cloud service roles in the cluster.
   * - false: Queries the list of KubeConfigs for Resource Access Management (RAM) users or roles in the cluster.
   * 
   * @example
   * true
   */
  cloudServiceKubeConfig?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * Valid values: integers greater than or equal to 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cloudServiceKubeConfig: 'cloudServiceKubeConfig',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudServiceKubeConfig: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


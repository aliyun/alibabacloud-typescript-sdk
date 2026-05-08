// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the results are returned.
   * 
   * Valid values:
   * 
   * *   zh-CN
   * *   en-US
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The type of the cluster.
   * 
   * Valid values:
   * 
   * *   ExternalKubernetes: registered clusters.
   * *   ManagedKubernetes: managed clusters.
   * *   Kubernetes: dedicated clusters.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The subtype of the managed cluster.
   * 
   * Valid values:
   * 
   * *   Lingjun: ACK Lingjun clusters.
   * *   Serverless: ACK serverless clusters.
   * *   Default: ACK managed clusters.
   * *   Edge: ACK Edge clusters.
   * 
   * @example
   * Default
   */
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
      clusterType: 'clusterType',
      profile: 'profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterType: 'string',
      profile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


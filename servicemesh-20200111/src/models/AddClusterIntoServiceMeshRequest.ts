// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddClusterIntoServiceMeshRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * ce3c25e247da24f3aab9b7edfae83****
   */
  clusterId?: string;
  /**
   * @remarks
   * Indicates whether to add the cluster to an ASM instance in only service discovery mode.
   * 
   * @example
   * false
   */
  discoveryOnly?: boolean;
  /**
   * @remarks
   * Specifies whether to check that the cluster you want to add to the ASM instance belongs to the istio-system namespace. This parameter is often used in scenarios where you migrate traffic from self-managed open source Istio to ASM. Valid values: true and false.
   * 
   * @example
   * false
   */
  ignoreNamespaceCheck?: boolean;
  /**
   * @remarks
   * The cluster certificate.
   * 
   * @example
   * apiVersion: v1 clusters: - cluster:     server: https://47.110.xx.xx:6443     certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURUakNDQWphZ0F3SUJBZ0lVYzBQVy82ejR1aHlxYkRRdnNsV1htSmpJeFdNd0RRWUpLb1pJaHZjTkFRRUwKQlFBd1BqRW5NQThHQTFVRUNoTUlhR0Z1WjNwb2IzVXdGQVlEVlFRS0V3MWhiR2xpWVdKaElHTnNiM1ZrTVJNdwpFUVlEVlFRREV3cHJkV0psY201bGRHVnpNQ0FYRFRJeU1EUXdOekExTVRnd01Gb1lEekl3TlRJd016TXdNRFV4Ck9EQXdXakErTVNjd0R3WURWUVFLRXdob1lXNW5lbWh2ZFRBVUJnTlZCQW9URFdGc2FXSmhZbUVnWTJ4dmRXUXgKRXpBUkJnTlZCQU1UQ210MVltVnlibVYwWlhNd2dnRWlNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJE****
   */
  kubeconfig?: string;
  /**
   * @remarks
   * The ID of the Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      discoveryOnly: 'DiscoveryOnly',
      ignoreNamespaceCheck: 'IgnoreNamespaceCheck',
      kubeconfig: 'Kubeconfig',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      discoveryOnly: 'boolean',
      ignoreNamespaceCheck: 'boolean',
      kubeconfig: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


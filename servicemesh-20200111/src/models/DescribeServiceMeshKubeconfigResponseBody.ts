// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshKubeconfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the kubeconfig certificate. The format is: YYYY-MM-DD hh: mm: ss.
   * 
   * @example
   * 2024-05-28 16:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The content of the kubeconfig file of the cluster.
   * 
   * @example
   * apiVersion: v1 clusters: - cluster:     server: https://47.110.xx.xx:6443     certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURUakNDQWphZ0F3SUJBZ0lVYzBQVy82ejR1aHlxYkRRdnNsV1htSmpJeFdNd0RRWUpLb1pJaHZjTkFRRUwKQlFBd1BqRW5NQThHQTFVRUNoTUlhR0Z1WjNwb2IzVXdGQVlEVlFRS0V3MWhiR2xpWVdKaElHTnNiM1ZrTVJNdwpFUVlEVlFRREV3cHJkV0psY201bGRHVnpNQ0FYRFRJeU1EUXdOekExTVRnd01Gb1lEekl3TlRJd016TXdNRFV4Ck9EQXdXakErTVNjd0R3WURWUVFLRXdob1lXNW5lbWh2ZFRBVUJnTlZCQW9URFdGc2FXSmhZbUVnWTJ4dmRXUXgKRXpBUkJnTlZCQU1UQ210MVltVnlibVYwWlhNd2dnRWlNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJE****
   */
  kubeconfig?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      kubeconfig: 'Kubeconfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      kubeconfig: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


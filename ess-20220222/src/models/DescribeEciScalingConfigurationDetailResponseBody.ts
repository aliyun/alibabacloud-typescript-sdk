// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration";


export class DescribeEciScalingConfigurationDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The YAML output of the scaling configuration.
   * 
   * @example
   * apiVersion: apps/v1
   * kind: Deployment
   * metadata:
   *   name: nginx-deployment
   *   labels:
   *     app: nginx
   *   spec:
   *     replicas: 3
   *     selector:
   *        matchLabels:
   *         app: nginx
   *     template:
   *       metadata:
   *         labels:
   *           app: nginx
   *         annotations:
   *           k8s.aliyun.com/eip-bandwidth: 10
   *           k8s.aliyun.com/eci-with-eip: true
   *         spec:
   *           containers:
   *           - name: nginx
   *             image: nginx:1.14.2
   *             ports:
   *             - containerPort: 80
   */
  output?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EF9BFEE-FE07-4627-B8FB-14326FB9****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the scaling configuration.
   */
  scalingConfiguration?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      requestId: 'RequestId',
      scalingConfiguration: 'ScalingConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      requestId: 'string',
      scalingConfiguration: DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration,
    };
  }

  validate() {
    if(this.scalingConfiguration && typeof (this.scalingConfiguration as any).validate === 'function') {
      (this.scalingConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


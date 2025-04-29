// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingGroupDetailResponseBodyScalingGroup } from "./DescribeScalingGroupDetailResponseBodyScalingGroup";


export class DescribeScalingGroupDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The output details of the scaling group of the Elastic Container Instance type. Currently, the output is displayed in a Kubernetes Deployment YAML file.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The scaling group.
   */
  scalingGroup?: DescribeScalingGroupDetailResponseBodyScalingGroup;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      requestId: 'RequestId',
      scalingGroup: 'ScalingGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      requestId: 'string',
      scalingGroup: DescribeScalingGroupDetailResponseBodyScalingGroup,
    };
  }

  validate() {
    if(this.scalingGroup && typeof (this.scalingGroup as any).validate === 'function') {
      (this.scalingGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


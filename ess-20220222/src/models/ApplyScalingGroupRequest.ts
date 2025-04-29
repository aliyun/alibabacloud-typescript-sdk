// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyScalingGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration file.
   * 
   * This parameter is required.
   * 
   * @example
   * apiVersion: apps/v1
   * kind: Deployment
   * metadata:
   *   name: nginx-deployment
   *   labels:
   *     app: nginx
   * spec:
   *   replicas: 3
   *   selector:
   *     matchLabels:
   *       app: nginx
   *   template:
   *     metadata:
   *       labels:
   *         app: nginx
   *       annotations:
   *         k8s.aliyun.com/eip-bandwidth: 10
   *         k8s.aliyun.com/eci-with-eip: true
   *     spec:
   *       containers:
   *       - name: nginx
   *         image: nginx:1.14.2
   *         ports:
   *         - containerPort: 80
   */
  content?: string;
  /**
   * @remarks
   * Optional. The format of the configuration file. Default value: YAML. Set the value to YAML.
   * 
   * @example
   * YAML
   */
  format?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      format: 'Format',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      format: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


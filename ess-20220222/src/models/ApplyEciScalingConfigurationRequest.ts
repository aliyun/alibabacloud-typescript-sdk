// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyEciScalingConfigurationRequest extends $dara.Model {
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
  content?: string;
  /**
   * @remarks
   * Optional. Set the value to YAML.
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
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the scaling configuration.
   * 
   * If you want the system to update a scaling configuration of the Elastic Container Instance type based on a YAML configuration file, you must specify `ScalingConfigurationId`. If you do not specify `ScalingConfigurationId`, the system creates a new scaling configuration based on the YAML configuration file.
   * 
   * @example
   * asc-bp1i65jd06v04vdh****
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      format: 'Format',
      regionId: 'RegionId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      format: 'string',
      regionId: 'string',
      scalingConfigurationId: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaypointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster on the data plane.
   * 
   * This parameter is required.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable Horizontal Pod Autoscaling (HPA).
   * 
   * @example
   * false
   */
  HPAEnabled?: boolean;
  /**
   * @remarks
   * The maximum number of waypoint proxy pods when HPA is enabled.
   * 
   * @example
   * 4
   */
  HPAMaxReplicas?: number;
  /**
   * @remarks
   * The minimum number of waypoint proxy pods when HPA is enabled.
   * 
   * @example
   * 2
   */
  HPAMinReplicas?: number;
  /**
   * @remarks
   * The expected CPU utilization when HPA is enabled.
   * 
   * @example
   * 93
   */
  HPATargetCPU?: number;
  /**
   * @remarks
   * The expected memory usage when HPA is enabled.
   * 
   * @example
   * 91
   */
  HPATargetMemory?: number;
  /**
   * @remarks
   * The maximum number of CPU cores that are available to the waypoint proxy pods.
   * 
   * @example
   * 2000m
   */
  limitCPU?: string;
  /**
   * @remarks
   * The maximum size of the memory that is available to the waypoint proxy pods.
   * 
   * @example
   * 1024Mi
   */
  limitMemory?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Specifies whether to deploy waypoint proxy pods based on Elastic Container Instance (ECI).
   * 
   * @example
   * false
   */
  preferECI?: boolean;
  /**
   * @remarks
   * The number of waypoint proxy pods.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * The number of CPU cores requested by the waypoint proxy pods.
   * 
   * @example
   * 100m
   */
  requestCPU?: string;
  /**
   * @remarks
   * The size of the memory requested by the waypoint proxy pods.
   * 
   * @example
   * 128Mi
   */
  requestMemory?: string;
  /**
   * @remarks
   * The service account on which the waypoint proxy takes effect. If you do not specify this parameter, the waypoint proxy takes effect for the entire namespace.
   * 
   * @example
   * bookinfo-productpage
   */
  serviceAccount?: string;
  /**
   * @remarks
   * The Service Mesh (ASM) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ce134b0727aa2492db69f6c3880e****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      HPAEnabled: 'HPAEnabled',
      HPAMaxReplicas: 'HPAMaxReplicas',
      HPAMinReplicas: 'HPAMinReplicas',
      HPATargetCPU: 'HPATargetCPU',
      HPATargetMemory: 'HPATargetMemory',
      limitCPU: 'LimitCPU',
      limitMemory: 'LimitMemory',
      namespace: 'Namespace',
      preferECI: 'PreferECI',
      replicas: 'Replicas',
      requestCPU: 'RequestCPU',
      requestMemory: 'RequestMemory',
      serviceAccount: 'ServiceAccount',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      HPAEnabled: 'boolean',
      HPAMaxReplicas: 'number',
      HPAMinReplicas: 'number',
      HPATargetCPU: 'number',
      HPATargetMemory: 'number',
      limitCPU: 'string',
      limitMemory: 'string',
      namespace: 'string',
      preferECI: 'boolean',
      replicas: 'number',
      requestCPU: 'string',
      requestMemory: 'string',
      serviceAccount: 'string',
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


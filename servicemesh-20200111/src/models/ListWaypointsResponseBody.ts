// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaypointsResponseBodyWaypoints extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Horizontal Pod Autoscaling (HPA) is enabled.
   * 
   * @example
   * false
   */
  HPAEnabled?: string;
  /**
   * @remarks
   * The maximum number of waypoint proxy pods when HPA is enabled.
   * 
   * @example
   * 4
   */
  HPAMaxReplicas?: string;
  /**
   * @remarks
   * The minimum number of waypoint proxy pods when HPA is enabled.
   * 
   * @example
   * 2
   */
  HPAMinReplicas?: string;
  /**
   * @remarks
   * The expected CPU utilization when HPA is enabled.
   * 
   * @example
   * 93
   */
  HPATargetCPU?: string;
  /**
   * @remarks
   * The expected memory usage when HPA is enabled.
   * 
   * @example
   * 91
   */
  HPATargetMemory?: string;
  /**
   * @remarks
   * The maximum amount of CPU resources that are available to the waypoint proxy pods.
   * 
   * @example
   * 2000m
   */
  limitCPU?: string;
  /**
   * @remarks
   * The maximum amount of memory resources that are available to the waypoint proxy pods.
   * 
   * @example
   * 1024Mi
   */
  limitMemory?: string;
  /**
   * @remarks
   * The name of the gateway resource for the waypoint proxy. If the waypoint proxy applies to a service account, the name is the service account name. If the waypoint proxy applies to the entire namespace, the name is `namespace`.
   * 
   * @example
   * namespace
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Indicates whether waypoint proxy pods are preferentially scheduled to elastic container instances.
   * 
   * @example
   * false
   */
  preferECI?: string;
  /**
   * @remarks
   * The number of waypoint proxy pods.
   * 
   * @example
   * 1
   */
  replicas?: string;
  /**
   * @remarks
   * The amount of CPU resources requested by the waypoint proxy pods.
   * 
   * @example
   * 100m
   */
  requestCPU?: string;
  /**
   * @remarks
   * The amount of memory resources requested by the waypoint proxy pods.
   * 
   * @example
   * 128Mi
   */
  requestMemory?: string;
  /**
   * @remarks
   * The service account to which the waypoint proxy applies. If no value is returned for this parameter, the waypoint proxy applies to the entire namespace.
   * 
   * @example
   * bookinfo-productpage
   */
  serviceAccount?: string;
  static names(): { [key: string]: string } {
    return {
      HPAEnabled: 'HPAEnabled',
      HPAMaxReplicas: 'HPAMaxReplicas',
      HPAMinReplicas: 'HPAMinReplicas',
      HPATargetCPU: 'HPATargetCPU',
      HPATargetMemory: 'HPATargetMemory',
      limitCPU: 'LimitCPU',
      limitMemory: 'LimitMemory',
      name: 'Name',
      namespace: 'Namespace',
      preferECI: 'PreferECI',
      replicas: 'Replicas',
      requestCPU: 'RequestCPU',
      requestMemory: 'RequestMemory',
      serviceAccount: 'ServiceAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      HPAEnabled: 'string',
      HPAMaxReplicas: 'string',
      HPAMinReplicas: 'string',
      HPATargetCPU: 'string',
      HPATargetMemory: 'string',
      limitCPU: 'string',
      limitMemory: 'string',
      name: 'string',
      namespace: 'string',
      preferECI: 'string',
      replicas: 'string',
      requestCPU: 'string',
      requestMemory: 'string',
      serviceAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaypointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Base64 encoded string. If it is empty, it means that all waypoints have been obtained; if it is not empty, this value should be included in the next list, and you can continue to obtain it from the offset that ends this time.
   * 
   * @example
   * eyJ2IjoibWV0YS5rOHMuaW8vdjEiLCJydiI6MjY4Njc5Miwic3RhcnQiOiJkZWZhdWx0L2Jvb2tpbmZvLXByb2R1Y3RwYWdlXHUwMDAwIn0
   */
  continue?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of waypoint proxies.
   */
  waypoints?: ListWaypointsResponseBodyWaypoints[];
  static names(): { [key: string]: string } {
    return {
      continue: 'Continue',
      requestId: 'RequestId',
      waypoints: 'Waypoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continue: 'string',
      requestId: 'string',
      waypoints: { 'type': 'array', 'itemType': ListWaypointsResponseBodyWaypoints },
    };
  }

  validate() {
    if(Array.isArray(this.waypoints)) {
      $dara.Model.validateArray(this.waypoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


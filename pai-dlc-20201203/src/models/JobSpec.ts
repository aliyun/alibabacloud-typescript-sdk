// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssignNodeSpec } from "./AssignNodeSpec";
import { AutoScalingSpec } from "./AutoScalingSpec";
import { ExtraPodSpec } from "./ExtraPodSpec";
import { ImageConfig } from "./ImageConfig";
import { LocalMountSpec } from "./LocalMountSpec";
import { ResourceConfig } from "./ResourceConfig";
import { ServiceSpec } from "./ServiceSpec";
import { SpotSpec } from "./SpotSpec";
import { StartupDependency } from "./StartupDependency";
import { SystemDisk } from "./SystemDisk";


export class JobSpec extends $dara.Model {
  /**
   * @remarks
   * The scheduling node configurations.
   */
  assignNodeSpec?: AssignNodeSpec;
  /**
   * @remarks
   * The auto scaling configurations.
   */
  autoScalingSpec?: AutoScalingSpec;
  /**
   * @remarks
   * The hardware specifications of the worker. For more information, see [Billing of DLC](https://help.aliyun.com/document_detail/171758.html) of PAI.
   * 
   * >  The price varies based on instance types.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The additional pod configurations.
   */
  extraPodSpec?: ExtraPodSpec;
  /**
   * @remarks
   * The address of the image that is run by the worker node. You can call [ListImages](https://help.aliyun.com/document_detail/449118.html) to obtain the image provided by PAI. You can also specify a third-party public image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/cloud-dsw/tensorflow:1.12PAI-gpu-py36-cu101-ubuntu18.04
   */
  image?: string;
  /**
   * @remarks
   * The configuration of the private image.
   */
  imageConfig?: ImageConfig;
  /**
   * @remarks
   * Deprecated.
   * 
   * @deprecated
   */
  isCheif?: boolean;
  /**
   * @remarks
   * Whether the role is a Chief role. Chief role must be unique.
   */
  isChief?: boolean;
  /**
   * @remarks
   * The list of local mount configurations.
   */
  localMountSpecs?: LocalMountSpec[];
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 1
   */
  podCount?: number;
  quotaId?: string;
  /**
   * @remarks
   * The resource configurations.
   */
  resourceConfig?: ResourceConfig;
  /**
   * @remarks
   * The restart policy. Valid values: Always, Never, OnFailure, and ExitCode.
   * 
   * @example
   * ExitCode
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The service configurations.
   */
  serviceSpec?: ServiceSpec;
  /**
   * @remarks
   * The configurations of the preemptible instance.
   */
  spotSpec?: SpotSpec;
  startupDependencies?: StartupDependency[];
  systemDisk?: SystemDisk;
  /**
   * @remarks
   * The worker type, which is related to JobType. The valid values of this parameter vary based on the value of JobType.
   * 
   * *   Valid values when JobType is set to **TFJob**: Chief, PS, Worker, Evaluator, and GraphLearn.
   * *   Valid values when JobType is set to **PyTorchJob**: Worker and Master.
   * *   Valid values when JobType is set to **XGBoostJob**: Worker and Master.
   * *   Valid values when JobType is set to **OneFlowJob**: Worker and Master.
   * *   Valid values when JobType is set to **ElasticBatch**: Worker and Master.
   * 
   * The Master node in jobs of the PyTorchJob, XGBoostJob, OneFlowJob, or ElasticBatch type is optional. If you do not specify the Master node, the system automatically uses the first Worker node as the Master node.
   * 
   * @example
   * Worker
   */
  type?: string;
  /**
   * @remarks
   * Whether to use preemptible instances.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  useSpotInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      assignNodeSpec: 'AssignNodeSpec',
      autoScalingSpec: 'AutoScalingSpec',
      ecsSpec: 'EcsSpec',
      extraPodSpec: 'ExtraPodSpec',
      image: 'Image',
      imageConfig: 'ImageConfig',
      isCheif: 'IsCheif',
      isChief: 'IsChief',
      localMountSpecs: 'LocalMountSpecs',
      podCount: 'PodCount',
      quotaId: 'QuotaId',
      resourceConfig: 'ResourceConfig',
      restartPolicy: 'RestartPolicy',
      serviceSpec: 'ServiceSpec',
      spotSpec: 'SpotSpec',
      startupDependencies: 'StartupDependencies',
      systemDisk: 'SystemDisk',
      type: 'Type',
      useSpotInstance: 'UseSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignNodeSpec: AssignNodeSpec,
      autoScalingSpec: AutoScalingSpec,
      ecsSpec: 'string',
      extraPodSpec: ExtraPodSpec,
      image: 'string',
      imageConfig: ImageConfig,
      isCheif: 'boolean',
      isChief: 'boolean',
      localMountSpecs: { 'type': 'array', 'itemType': LocalMountSpec },
      podCount: 'number',
      quotaId: 'string',
      resourceConfig: ResourceConfig,
      restartPolicy: 'string',
      serviceSpec: ServiceSpec,
      spotSpec: SpotSpec,
      startupDependencies: { 'type': 'array', 'itemType': StartupDependency },
      systemDisk: SystemDisk,
      type: 'string',
      useSpotInstance: 'boolean',
    };
  }

  validate() {
    if(this.assignNodeSpec && typeof (this.assignNodeSpec as any).validate === 'function') {
      (this.assignNodeSpec as any).validate();
    }
    if(this.autoScalingSpec && typeof (this.autoScalingSpec as any).validate === 'function') {
      (this.autoScalingSpec as any).validate();
    }
    if(this.extraPodSpec && typeof (this.extraPodSpec as any).validate === 'function') {
      (this.extraPodSpec as any).validate();
    }
    if(this.imageConfig && typeof (this.imageConfig as any).validate === 'function') {
      (this.imageConfig as any).validate();
    }
    if(Array.isArray(this.localMountSpecs)) {
      $dara.Model.validateArray(this.localMountSpecs);
    }
    if(this.resourceConfig && typeof (this.resourceConfig as any).validate === 'function') {
      (this.resourceConfig as any).validate();
    }
    if(this.serviceSpec && typeof (this.serviceSpec as any).validate === 'function') {
      (this.serviceSpec as any).validate();
    }
    if(this.spotSpec && typeof (this.spotSpec as any).validate === 'function') {
      (this.spotSpec as any).validate();
    }
    if(Array.isArray(this.startupDependencies)) {
      $dara.Model.validateArray(this.startupDependencies);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


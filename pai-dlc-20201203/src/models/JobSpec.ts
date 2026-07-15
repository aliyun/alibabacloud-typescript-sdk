// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssignNodeSpec } from "./AssignNodeSpec";
import { AutoScalingSpec } from "./AutoScalingSpec";
import { ElasticSpotSpec } from "./ElasticSpotSpec";
import { ExtraPodSpec } from "./ExtraPodSpec";
import { HyperNodeSchedulingConfig } from "./HyperNodeSchedulingConfig";
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
   * The scheduling node assignment configuration.
   */
  assignNodeSpec?: AssignNodeSpec;
  /**
   * @remarks
   * The auto scaling configuration.
   */
  autoScalingSpec?: AutoScalingSpec;
  /**
   * @remarks
   * Specifies whether to consider this role when determining job success. This parameter takes effect only when the success policy is set to Partial.
   */
  considerInSuccessPolicy?: boolean;
  /**
   * @remarks
   * The hardware specifications of the worker. Visit [PAI-DLC billing](https://help.aliyun.com/document_detail/171758.html) for the detailed list of specifications.>Notice: Prices vary depending on the specifications.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  elasticSpotSpecs?: ElasticSpotSpec[];
  /**
   * @remarks
   * The additional pod configuration.
   */
  extraPodSpec?: ExtraPodSpec;
  hyperNodeSchedulingConfig?: HyperNodeSchedulingConfig;
  /**
   * @remarks
   * The runtime image address for this type of worker. Call [ListImages](https://help.aliyun.com/document_detail/449118.html) to obtain images provided by the PAI platform. You can also specify a third-party public image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/cloud-dsw/tensorflow:1.12PAI-gpu-py36-cu101-ubuntu18.04
   */
  image?: string;
  /**
   * @remarks
   * The private image configuration.
   */
  imageConfig?: ImageConfig;
  /**
   * @remarks
   * Deprecated due to a spelling error.
   * 
   * @deprecated
   */
  isCheif?: boolean;
  /**
   * @remarks
   * Indicates whether this role is the Chief role. Only one Chief role is allowed.
   */
  isChief?: boolean;
  /**
   * @remarks
   * The list of local mount configurations.
   */
  localMountSpecs?: LocalMountSpec[];
  oversoldType?: string;
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
   * The resource configuration.
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
   * The service configuration.
   */
  serviceSpec?: ServiceSpec;
  /**
   * @remarks
   * The spot instance configuration.
   */
  spotSpec?: SpotSpec;
  /**
   * @remarks
   * The dependencies required before this role starts.
   */
  startupDependencies?: StartupDependency[];
  systemDisk?: SystemDisk;
  /**
   * @remarks
   * Type is closely related to Job Type. Different Job Types support different Worker Types.
   * 
   * - **TFJob**: Supports Chief, PS, Worker, Evaluator, and GraphLearn.
   * 
   * - **PyTorchJob**: Supports Worker and Master.
   * 
   * - **XGBoostJob**: Supports Worker and Master.
   * - **OneFlowJob**: Supports Worker and Master.
   * - **ElasticBatch**: Supports Worker and Master.
   * - **RayJob**: Supports Head, Worker, and Worker[-xxx].
   * 
   * Master is optional in PyTorchJob, XGBoostJob, OneFlowJob, and ElasticBatch. If Master is not specified, the system automatically designates the first Worker node as Master.
   * 
   * @example
   * Worker
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to use spot instances.
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
      considerInSuccessPolicy: 'ConsiderInSuccessPolicy',
      ecsSpec: 'EcsSpec',
      elasticSpotSpecs: 'ElasticSpotSpecs',
      extraPodSpec: 'ExtraPodSpec',
      hyperNodeSchedulingConfig: 'HyperNodeSchedulingConfig',
      image: 'Image',
      imageConfig: 'ImageConfig',
      isCheif: 'IsCheif',
      isChief: 'IsChief',
      localMountSpecs: 'LocalMountSpecs',
      oversoldType: 'OversoldType',
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
      considerInSuccessPolicy: 'boolean',
      ecsSpec: 'string',
      elasticSpotSpecs: { 'type': 'array', 'itemType': ElasticSpotSpec },
      extraPodSpec: ExtraPodSpec,
      hyperNodeSchedulingConfig: HyperNodeSchedulingConfig,
      image: 'string',
      imageConfig: ImageConfig,
      isCheif: 'boolean',
      isChief: 'boolean',
      localMountSpecs: { 'type': 'array', 'itemType': LocalMountSpec },
      oversoldType: 'string',
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
    if(Array.isArray(this.elasticSpotSpecs)) {
      $dara.Model.validateArray(this.elasticSpotSpecs);
    }
    if(this.extraPodSpec && typeof (this.extraPodSpec as any).validate === 'function') {
      (this.extraPodSpec as any).validate();
    }
    if(this.hyperNodeSchedulingConfig && typeof (this.hyperNodeSchedulingConfig as any).validate === 'function') {
      (this.hyperNodeSchedulingConfig as any).validate();
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


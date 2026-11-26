// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecipeSpec extends $dara.Model {
  /**
   * @remarks
   * The CPU specification of a single pod, represented as a Kubernetes quantity string such as "4".
   * 
   * @example
   * 4
   */
  CPU?: string;
  /**
   * @remarks
   * The name of the ECS instance specification. This field is not supported when starting an RLJob. Omit this field. A non-empty value returns Recipe.InvalidParameter. The example only illustrates the name format.
   * 
   * @example
   * ecs.gn7i-c8g1.2xlarge
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The number of GPUs for a single pod, such as "1".
   * 
   * @example
   * 1
   */
  GPU?: string;
  /**
   * @remarks
   * The GPU type, such as "A100". You can obtain the supported values from the existing quota or specification API.
   * 
   * @example
   * A100
   */
  GPUType?: string;
  /**
   * @remarks
   * The memory specification of a single pod, represented as a Kubernetes quantity string such as "8Gi". This refers to the host memory rather than the GPU memory.
   * 
   * @example
   * 8Gi
   */
  memory?: string;
  /**
   * @remarks
   * The number of pods for the entry. The default value is 1. This parameter takes effect only when the value is greater than 0. Otherwise, the downstream RLJob uses the default value of 1.
   * 
   * @example
   * 1
   */
  podCount?: number;
  /**
   * @remarks
   * The quota ID. The current RLJob startup path requires a single quota. Multiple quotas are not supported.
   * 
   * @example
   * quotag2uo09dyp40
   */
  quotaId?: string;
  /**
   * @remarks
   * The shared memory specification of a single pod, represented as a Kubernetes quantity string such as "4Gi".
   * 
   * @example
   * 4Gi
   */
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      ecsSpec: 'EcsSpec',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      podCount: 'PodCount',
      quotaId: 'QuotaId',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      ecsSpec: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      podCount: 'number',
      quotaId: 'string',
      sharedMemory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


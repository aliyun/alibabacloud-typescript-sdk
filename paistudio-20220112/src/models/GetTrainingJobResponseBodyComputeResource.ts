// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTrainingJobResponseBodyComputeResourceInstanceSpec } from "./GetTrainingJobResponseBodyComputeResourceInstanceSpec";
import { GetTrainingJobResponseBodyComputeResourceSpotSpec } from "./GetTrainingJobResponseBodyComputeResourceSpotSpec";


export class GetTrainingJobResponseBodyComputeResource extends $dara.Model {
  /**
   * @example
   * 1
   */
  ecsCount?: number;
  /**
   * @example
   * ecs.gn5-c8g1.2xlarge
   */
  ecsSpec?: string;
  /**
   * @example
   * 1
   */
  instanceCount?: number;
  instanceSpec?: GetTrainingJobResponseBodyComputeResourceInstanceSpec;
  /**
   * @example
   * quotam670lixikcl
   */
  resourceId?: string;
  resourceName?: string;
  spotSpec?: GetTrainingJobResponseBodyComputeResourceSpotSpec;
  /**
   * @example
   * true
   */
  useSpotInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      instanceCount: 'InstanceCount',
      instanceSpec: 'InstanceSpec',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      spotSpec: 'SpotSpec',
      useSpotInstance: 'UseSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      ecsSpec: 'string',
      instanceCount: 'number',
      instanceSpec: GetTrainingJobResponseBodyComputeResourceInstanceSpec,
      resourceId: 'string',
      resourceName: 'string',
      spotSpec: GetTrainingJobResponseBodyComputeResourceSpotSpec,
      useSpotInstance: 'boolean',
    };
  }

  validate() {
    if(this.instanceSpec && typeof (this.instanceSpec as any).validate === 'function') {
      (this.instanceSpec as any).validate();
    }
    if(this.spotSpec && typeof (this.spotSpec as any).validate === 'function') {
      (this.spotSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


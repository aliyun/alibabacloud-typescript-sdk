// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutoScalingSpec } from "./AutoScalingSpec";
import { ResourceConfig } from "./ResourceConfig";


export class JobReplicaStatus extends $dara.Model {
  /**
   * @remarks
   * The number of active pods for this replica type.
   */
  active?: number;
  /**
   * @remarks
   * The type of spot instance in use, if any.
   */
  currentSpotInstanceType?: string;
  /**
   * @remarks
   * The number of dequeued pods.
   */
  dequeued?: number;
  /**
   * @remarks
   * The estimated auto scaling specification.
   * 
   * **if can be null:**
   * true
   */
  estimatedAutoScalingSpec?: AutoScalingSpec;
  /**
   * @remarks
   * The estimated number of pods for this replica type, used for auto scaling.
   */
  estimatedPodCount?: number;
  /**
   * @remarks
   * The estimated resource configuration.
   * 
   * **if can be null:**
   * true
   */
  estimatedResourceConfig?: ResourceConfig;
  /**
   * @remarks
   * The number of queued pods.
   */
  queuing?: number;
  /**
   * @remarks
   * The type of the job replica.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      currentSpotInstanceType: 'CurrentSpotInstanceType',
      dequeued: 'Dequeued',
      estimatedAutoScalingSpec: 'EstimatedAutoScalingSpec',
      estimatedPodCount: 'EstimatedPodCount',
      estimatedResourceConfig: 'EstimatedResourceConfig',
      queuing: 'Queuing',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      currentSpotInstanceType: 'string',
      dequeued: 'number',
      estimatedAutoScalingSpec: AutoScalingSpec,
      estimatedPodCount: 'number',
      estimatedResourceConfig: ResourceConfig,
      queuing: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.estimatedAutoScalingSpec && typeof (this.estimatedAutoScalingSpec as any).validate === 'function') {
      (this.estimatedAutoScalingSpec as any).validate();
    }
    if(this.estimatedResourceConfig && typeof (this.estimatedResourceConfig as any).validate === 'function') {
      (this.estimatedResourceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


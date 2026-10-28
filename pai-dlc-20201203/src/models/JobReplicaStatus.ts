// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutoScalingSpec } from "./AutoScalingSpec";
import { ResourceConfig } from "./ResourceConfig";


export class JobReplicaStatus extends $dara.Model {
  /**
   * @remarks
   * The number of replicas of this role that are currently running.
   * 
   * @example
   * 0
   */
  active?: number;
  /**
   * @remarks
   * The currently selected spot instance type (applies only to elastic spot tasks).
   * 
   * @example
   * ecs.gn6e-c12g1.3xlarge
   */
  currentSpotInstanceType?: string;
  /**
   * @remarks
   * The number of replicas of this role that have been dequeued.
   * 
   * @example
   * 0
   */
  dequeued?: number;
  /**
   * @remarks
   * The estimated auto-scaling configuration for this role.
   * 
   * **if can be null:**
   * true
   */
  estimatedAutoScalingSpec?: AutoScalingSpec;
  /**
   * @remarks
   * The estimated number of pods for this role.
   * 
   * @example
   * 2
   */
  estimatedPodCount?: number;
  /**
   * @remarks
   * The estimated resource configuration for this role.
   * 
   * **if can be null:**
   * true
   */
  estimatedResourceConfig?: ResourceConfig;
  /**
   * @remarks
   * The number of replicas of this role that are still in the queue.
   * 
   * @example
   * 0
   */
  queuing?: number;
  /**
   * @remarks
   * The role type to which the task replicas belong.
   * 
   * @example
   * Worker
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


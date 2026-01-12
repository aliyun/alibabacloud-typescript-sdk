// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutoScalingSpec } from "./AutoScalingSpec";
import { ResourceConfig } from "./ResourceConfig";


export class JobReplicaStatus extends $dara.Model {
  active?: number;
  dequeued?: number;
  /**
   * **if can be null:**
   * true
   */
  estimatedAutoScalingSpec?: AutoScalingSpec;
  estimatedPodCount?: number;
  /**
   * **if can be null:**
   * true
   */
  estimatedResourceConfig?: ResourceConfig;
  queuing?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
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


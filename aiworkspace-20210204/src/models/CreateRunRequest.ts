// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { RunParam } from "./RunParam";


export class CreateRunRequest extends $dara.Model {
  /**
   * @remarks
   * The experiment ID associated with the run.
   * 
   * This parameter is required.
   * 
   * @example
   * exp-6thbb5xrbmp*****
   */
  experimentId?: string;
  /**
   * @remarks
   * The list of labels for the run.
   */
  labels?: Label[];
  /**
   * @remarks
   * The name of the run. Naming rules:
   * - Must start with a lowercase or uppercase letter.
   * - Can contain uppercase and lowercase letters, digits, underscores (_), or hyphens (-).
   * - Must be 1 to 63 characters in length.
   * 
   * If the name is left empty during creation, the server-generated random ID (RunID) is used as the name.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The list of parameters for the run.
   */
  params?: RunParam[];
  /**
   * @remarks
   * The PAI workload ID associated with the run.
   * 
   * @example
   * job-jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of PAI workload source associated with the run. Valid values: TrainingService, DLC, or empty. This parameter is optional and defaults to empty.
   * 
   * @example
   * DLC
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      labels: 'Labels',
      name: 'Name',
      params: 'Params',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      name: 'string',
      params: { 'type': 'array', 'itemType': RunParam },
      sourceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


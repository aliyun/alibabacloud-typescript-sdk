// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { RunParam } from "./RunParam";


export class CreateRunRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the experiment associated with the run.
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
   * The name of the run. The naming convention is as follows:
   * 
   * - Starts with a lowercase or uppercase letter.
   * 
   * - Can contain lowercase letters, uppercase letters, digits, underscores (_), and hyphens (-).
   * 
   * - The length must be 1 to 63 characters.
   * 
   * If this parameter is left empty, the server-generated random ID (RunID) is used as the name.
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
   * The ID of the PAI workload associated with the run.
   * 
   * @example
   * job-jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type of the PAI workload associated with the run. Options include TrainingService, DLC, or empty. This parameter is optional. The default value is empty.
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


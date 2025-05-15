// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResultDataRequest extends $dara.Model {
  /**
   * @remarks
   * Experiment ID
   * 
   * This parameter is required.
   * 
   * @example
   * 234
   */
  experimentId?: number;
  /**
   * @remarks
   * Hostname
   * 
   * @example
   * iZj6ccwd7zwfms7hzaz2riZ
   */
  hostname?: string;
  /**
   * @remarks
   * Resource Group Id
   * 
   * @example
   * rg-sfjgskdfj3k4
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Workload Type
   * 
   * @example
   * AI
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      hostname: 'Hostname',
      resourceGroupId: 'ResourceGroupId',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'number',
      hostname: 'string',
      resourceGroupId: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ABTestExperiment } from "./AbtestExperiment";


export class CreateABTestExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: ABTestExperiment;
  /**
   * @remarks
   * Specifies whether to perform a dry run. The default value is false. Valid values:
   * 
   * Valid values:
   * 
   * - **true**: The system checks the validity of the request parameters.
   * 
   * - **false**: The system checks the validity of the request parameters and creates the experiment.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ABTestExperiment,
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


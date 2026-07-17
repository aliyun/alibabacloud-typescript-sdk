// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ABTestExperiment } from "./AbtestExperiment";


export class UpdateABTestExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * The request body. For more information, see [ABTestExperiment](https://help.aliyun.com/document_detail/173617.html).
   */
  body?: ABTestExperiment;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - true: Performs a dry run. The system checks if your AccessKey is valid, if the Resource Access Management (RAM) user is authorized, and if all required parameters are specified. The request is not sent.
   * 
   * - false (default): Sends the request to update the experiment.
   * 
   * @example
   * true
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


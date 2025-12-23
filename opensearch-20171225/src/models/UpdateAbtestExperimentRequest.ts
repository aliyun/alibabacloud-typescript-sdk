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
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. No endpoint is created. The system checks whether your AccessKey is valid, whether Resource Access Management (RAM) users are authorized, and whether the required parameters are set.
   * *   false (default): creates an endpoint immediately.
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


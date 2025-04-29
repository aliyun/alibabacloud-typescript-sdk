// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DryRunSwaggerResponseBodyFailed } from "./DryRunSwaggerResponseBodyFailed";
import { DryRunSwaggerResponseBodyModelFailed } from "./DryRunSwaggerResponseBodyModelFailed";
import { DryRunSwaggerResponseBodyModelSuccess } from "./DryRunSwaggerResponseBodyModelSuccess";
import { DryRunSwaggerResponseBodySuccess } from "./DryRunSwaggerResponseBodySuccess";


export class DryRunSwaggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The APIs that failed to be created based on the Swagger-compliant data imported this time.
   */
  failed?: DryRunSwaggerResponseBodyFailed;
  /**
   * @remarks
   * The global condition.
   * 
   * @example
   * {}
   */
  globalCondition?: string;
  /**
   * @remarks
   * The models that failed to be imported through the Swagger-compliant data this time.
   */
  modelFailed?: DryRunSwaggerResponseBodyModelFailed;
  /**
   * @remarks
   * The models that failed to be imported through the Swagger-compliant data this time.
   */
  modelSuccess?: DryRunSwaggerResponseBodyModelSuccess;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
  /**
   * @remarks
   * The APIs that are created based on the Swagger-compliant data imported this time.
   */
  success?: DryRunSwaggerResponseBodySuccess;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      globalCondition: 'GlobalCondition',
      modelFailed: 'ModelFailed',
      modelSuccess: 'ModelSuccess',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: DryRunSwaggerResponseBodyFailed,
      globalCondition: 'string',
      modelFailed: DryRunSwaggerResponseBodyModelFailed,
      modelSuccess: DryRunSwaggerResponseBodyModelSuccess,
      requestId: 'string',
      success: DryRunSwaggerResponseBodySuccess,
    };
  }

  validate() {
    if(this.failed && typeof (this.failed as any).validate === 'function') {
      (this.failed as any).validate();
    }
    if(this.modelFailed && typeof (this.modelFailed as any).validate === 'function') {
      (this.modelFailed as any).validate();
    }
    if(this.modelSuccess && typeof (this.modelSuccess as any).validate === 'function') {
      (this.modelSuccess as any).validate();
    }
    if(this.success && typeof (this.success as any).validate === 'function') {
      (this.success as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


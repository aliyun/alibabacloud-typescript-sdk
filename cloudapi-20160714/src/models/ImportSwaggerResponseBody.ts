// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportSwaggerResponseBodyFailed } from "./ImportSwaggerResponseBodyFailed";
import { ImportSwaggerResponseBodyModelFailed } from "./ImportSwaggerResponseBodyModelFailed";
import { ImportSwaggerResponseBodyModelSuccess } from "./ImportSwaggerResponseBodyModelSuccess";
import { ImportSwaggerResponseBodySuccess } from "./ImportSwaggerResponseBodySuccess";


export class ImportSwaggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The APIs that failed to be created based on the Swagger-compliant data imported this time.
   */
  failed?: ImportSwaggerResponseBodyFailed;
  /**
   * @remarks
   * The models that failed to be imported through the Swagger-compliant data this time.
   */
  modelFailed?: ImportSwaggerResponseBodyModelFailed;
  /**
   * @remarks
   * The models that were imported through the Swagger-compliant data this time.
   */
  modelSuccess?: ImportSwaggerResponseBodyModelSuccess;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 647CEF05-404C-4125-B3D7-44792EB77392
   */
  requestId?: string;
  /**
   * @remarks
   * The APIs that are created based on the Swagger-compliant data imported this time.
   */
  success?: ImportSwaggerResponseBodySuccess;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      modelFailed: 'ModelFailed',
      modelSuccess: 'ModelSuccess',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: ImportSwaggerResponseBodyFailed,
      modelFailed: ImportSwaggerResponseBodyModelFailed,
      modelSuccess: ImportSwaggerResponseBodyModelSuccess,
      requestId: 'string',
      success: ImportSwaggerResponseBodySuccess,
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


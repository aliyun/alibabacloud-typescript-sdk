// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectStackDriftResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the drift detection.
   * 
   * @example
   * a7044f0d-6f2e-4128-a307-4524ef88****
   */
  driftDetectionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      driftDetectionId: 'DriftDetectionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


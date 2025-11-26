// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveInteractionEuCreateResponseBodyData extends $dara.Model {
  /**
   * @example
   * point
   */
  gesture?: string;
  /**
   * @example
   * A man in dark clothing stands on a rocky hilltop, facing away from the camera, gazing at the expansive view with a contemplative posture.
   */
  person?: string;
  /**
   * @example
   * Mountainous landscape with layered ridges receding into haze, under a vast blue sky with wispy clouds and soft golden light near the horizon.
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      gesture: 'gesture',
      person: 'person',
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gesture: 'string',
      person: 'string',
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveInteractionEuCreateResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: ActiveInteractionEuCreateResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 84656A01-32F0-5D12-8C72-E3AFAA0C8A29
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ActiveInteractionEuCreateResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


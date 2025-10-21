// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContentAsyncDetectRequestServiceParameter extends $dara.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentAsyncDetectRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  serviceParameter?: ContentAsyncDetectRequestServiceParameter;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
      serviceParameter: 'serviceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
      serviceParameter: ContentAsyncDetectRequestServiceParameter,
    };
  }

  validate() {
    if(this.serviceParameter && typeof (this.serviceParameter as any).validate === 'function') {
      (this.serviceParameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchContentAsyncDetectRequestServiceParameterList extends $dara.Model {
  /**
   * @example
   * "XXXXXXXX"
   */
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

export class BatchContentAsyncDetectRequest extends $dara.Model {
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
  serviceParameterList?: BatchContentAsyncDetectRequestServiceParameterList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
      serviceParameterList: 'serviceParameterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
      serviceParameterList: { 'type': 'array', 'itemType': BatchContentAsyncDetectRequestServiceParameterList },
    };
  }

  validate() {
    if(Array.isArray(this.serviceParameterList)) {
      $dara.Model.validateArray(this.serviceParameterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchContentSyncDetectRequestServiceParameterList extends $dara.Model {
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

export class BatchContentSyncDetectRequest extends $dara.Model {
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
   * imageDetection
   */
  serviceName?: string;
  serviceParameterList?: BatchContentSyncDetectRequestServiceParameterList[];
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
      serviceParameterList: { 'type': 'array', 'itemType': BatchContentSyncDetectRequestServiceParameterList },
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


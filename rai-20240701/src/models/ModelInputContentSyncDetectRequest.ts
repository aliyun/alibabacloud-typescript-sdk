// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelInputContentSyncDetectRequestBodyData extends $dara.Model {
  /**
   * @remarks
   * 1. The text content to be checked, with a maximum limit of 10,000 characters (including English and Chinese).
   * 2. Or the URL address of the image to be checked.
   * 
   * @example
   * 要检测的内容
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
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

export class ModelInputContentSyncDetectRequest extends $dara.Model {
  /**
   * @remarks
   * Request object
   */
  bodyData?: ModelInputContentSyncDetectRequestBodyData;
  /**
   * @remarks
   * Policy Identifier
   * 
   * @example
   * x1bc5xgs4uhx
   */
  policyIdentifier?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Scene name.
   * 
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * textDetection
   * imageDetection
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyData: 'BodyData',
      policyIdentifier: 'PolicyIdentifier',
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: ModelInputContentSyncDetectRequestBodyData,
      policyIdentifier: 'string',
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(this.bodyData && typeof (this.bodyData as any).validate === 'function') {
      (this.bodyData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelInputContentAsyncDetectRequestBodyData extends $dara.Model {
  /**
   * @remarks
   * 1. The text content to be reviewed, with a maximum limit of 10000 characters (including English and Chinese).
   * 2. Or the URL address of the image to be reviewed.
   * 
   * @example
   * the content to be checked
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

export class ModelInputContentAsyncDetectRequest extends $dara.Model {
  /**
   * @remarks
   * Request object
   */
  bodyData?: ModelInputContentAsyncDetectRequestBodyData;
  /**
   * @remarks
   * Policy ID
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
      bodyData: ModelInputContentAsyncDetectRequestBodyData,
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


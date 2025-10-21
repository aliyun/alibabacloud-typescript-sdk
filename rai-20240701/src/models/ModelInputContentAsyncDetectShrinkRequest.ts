// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelInputContentAsyncDetectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Request object
   */
  bodyDataShrink?: string;
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
      bodyDataShrink: 'BodyData',
      policyIdentifier: 'PolicyIdentifier',
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      policyIdentifier: 'string',
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


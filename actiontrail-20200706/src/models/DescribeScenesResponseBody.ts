// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScenesResponseBodySceneList extends $dara.Model {
  /**
   * @remarks
   * The description of the scenario.
   * 
   * @example
   * Query access events for the primary and sub-accounts and access keys under various scenarios, such as access events occurrence, access without MFA authentication, and failed access attempts.
   */
  description?: string;
  /**
   * @remarks
   * The name of the scenario.
   * 
   * @example
   * Account-related or AccessKey Pair-related Events
   */
  name?: string;
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * @example
   * sc-lpYrjKouRfy3MK-wteJW_Q
   */
  sceneId?: string;
  /**
   * @remarks
   * The identifier for the scenario category.
   * 
   * @example
   * identity
   */
  token?: string;
  /**
   * @remarks
   * The type of the scenario.
   * 
   * @example
   * normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sceneId: 'SceneId',
      token: 'Token',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sceneId: 'string',
      token: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScenesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7EC26DF0-35AC-5F37-82B3-F5545D0A****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of scenarios.
   */
  sceneList?: DescribeScenesResponseBodySceneList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sceneList: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sceneList: { 'type': 'array', 'itemType': DescribeScenesResponseBodySceneList },
    };
  }

  validate() {
    if(Array.isArray(this.sceneList)) {
      $dara.Model.validateArray(this.sceneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


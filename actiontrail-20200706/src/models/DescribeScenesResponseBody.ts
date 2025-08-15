// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScenesResponseBodySceneList extends $dara.Model {
  description?: string;
  name?: string;
  /**
   * @example
   * sc-lpYrjKouRfy3MK-wteJW_Q
   */
  sceneId?: string;
  /**
   * @example
   * identity
   */
  token?: string;
  /**
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
   * @example
   * 7EC26DF0-35AC-5F37-82B3-F5545D0A****
   */
  requestId?: string;
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


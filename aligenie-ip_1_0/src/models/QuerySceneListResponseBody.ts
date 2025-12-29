// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySceneListResponseBodyResultsTemplateInfoDTOList extends $dara.Model {
  description?: string;
  /**
   * @example
   * 6962
   */
  id?: number;
  /**
   * @example
   * 101
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListResponseBodyResults extends $dara.Model {
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/shuimian.png
   */
  icon?: string;
  /**
   * @example
   * 73
   */
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * external
   */
  sceneSource?: string;
  /**
   * @example
   * 1
   */
  sceneState?: number;
  /**
   * @example
   * common
   */
  sceneType?: string;
  templateInfoDTOList?: QuerySceneListResponseBodyResultsTemplateInfoDTOList[];
  unavailableReason?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      sceneSource: 'SceneSource',
      sceneState: 'SceneState',
      sceneType: 'SceneType',
      templateInfoDTOList: 'TemplateInfoDTOList',
      unavailableReason: 'UnavailableReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      sceneId: 'string',
      sceneName: 'string',
      sceneSource: 'string',
      sceneState: 'number',
      sceneType: 'string',
      templateInfoDTOList: { 'type': 'array', 'itemType': QuerySceneListResponseBodyResultsTemplateInfoDTOList },
      unavailableReason: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.templateInfoDTOList)) {
      $dara.Model.validateArray(this.templateInfoDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FAFCD152-4791-5F2F-B0BE-2DC06FD4F05B
   */
  requestId?: string;
  results?: QuerySceneListResponseBodyResults[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': QuerySceneListResponseBodyResults },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


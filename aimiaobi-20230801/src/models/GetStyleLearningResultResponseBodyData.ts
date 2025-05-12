// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStyleLearningResultResponseBodyDataContentList } from "./GetStyleLearningResultResponseBodyDataContentList";
import { GetStyleLearningResultResponseBodyDataMaterialInfoList } from "./GetStyleLearningResultResponseBodyDataMaterialInfoList";


export class GetStyleLearningResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * AIGC 生成的内容
   */
  aigcResult?: string;
  contentList?: GetStyleLearningResultResponseBodyDataContentList[];
  customTextIdList?: number[];
  /**
   * @example
   * 33
   */
  id?: number;
  materialIdList?: number[];
  materialInfoList?: GetStyleLearningResultResponseBodyDataMaterialInfoList[];
  /**
   * @example
   * 用户修订后内容
   */
  rewriteResult?: string;
  /**
   * @example
   * 文体风格名称
   */
  styleName?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      aigcResult: 'AigcResult',
      contentList: 'ContentList',
      customTextIdList: 'CustomTextIdList',
      id: 'Id',
      materialIdList: 'MaterialIdList',
      materialInfoList: 'MaterialInfoList',
      rewriteResult: 'RewriteResult',
      styleName: 'StyleName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aigcResult: 'string',
      contentList: { 'type': 'array', 'itemType': GetStyleLearningResultResponseBodyDataContentList },
      customTextIdList: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      materialIdList: { 'type': 'array', 'itemType': 'number' },
      materialInfoList: { 'type': 'array', 'itemType': GetStyleLearningResultResponseBodyDataMaterialInfoList },
      rewriteResult: 'string',
      styleName: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentList)) {
      $dara.Model.validateArray(this.contentList);
    }
    if(Array.isArray(this.customTextIdList)) {
      $dara.Model.validateArray(this.customTextIdList);
    }
    if(Array.isArray(this.materialIdList)) {
      $dara.Model.validateArray(this.materialIdList);
    }
    if(Array.isArray(this.materialInfoList)) {
      $dara.Model.validateArray(this.materialInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


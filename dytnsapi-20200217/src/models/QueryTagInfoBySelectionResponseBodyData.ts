// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTagInfoBySelectionResponseBodyDataParamList } from "./QueryTagInfoBySelectionResponseBodyDataParamList";


export class QueryTagInfoBySelectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of available authorization codes.
   */
  authCodeList?: string[];
  complexityType?: string;
  /**
   * @remarks
   * The URL for the API demo.
   * 
   * @example
   * https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.2573870.0.0.3aa921cbOrtqJz
   */
  demoAddress?: string;
  /**
   * @remarks
   * The URL for the API documentation.
   * 
   * @example
   * https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.2573870.0.0.3aa921cbOrtqJz
   */
  docAddress?: string;
  /**
   * @remarks
   * The URL for the definitions of the enumerated values.
   * 
   * @example
   * example.aliyundoc.com
   */
  enumDefinitionAddress?: string;
  /**
   * @remarks
   * The flow name.
   * 
   * @example
   * process name
   */
  flowName?: string;
  /**
   * @remarks
   * The industry ID.
   * 
   * @example
   * 83
   */
  industryId?: number;
  /**
   * @remarks
   * The industry name.
   * 
   * @example
   * logistics
   */
  industryName?: string;
  /**
   * @remarks
   * The list of tag parameters.
   */
  paramList?: QueryTagInfoBySelectionResponseBodyDataParamList[];
  richTextDescription?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 41
   */
  sceneId?: number;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * General scenario
   */
  sceneName?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 31
   */
  tagId?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Number ownership
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      authCodeList: 'AuthCodeList',
      complexityType: 'ComplexityType',
      demoAddress: 'DemoAddress',
      docAddress: 'DocAddress',
      enumDefinitionAddress: 'EnumDefinitionAddress',
      flowName: 'FlowName',
      industryId: 'IndustryId',
      industryName: 'IndustryName',
      paramList: 'ParamList',
      richTextDescription: 'RichTextDescription',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCodeList: { 'type': 'array', 'itemType': 'string' },
      complexityType: 'string',
      demoAddress: 'string',
      docAddress: 'string',
      enumDefinitionAddress: 'string',
      flowName: 'string',
      industryId: 'number',
      industryName: 'string',
      paramList: { 'type': 'array', 'itemType': QueryTagInfoBySelectionResponseBodyDataParamList },
      richTextDescription: 'string',
      sceneId: 'number',
      sceneName: 'string',
      tagId: 'number',
      tagName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authCodeList)) {
      $dara.Model.validateArray(this.authCodeList);
    }
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


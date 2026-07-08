// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagInfoBySelectionResponseBodyDataParamListValueDict extends $dara.Model {
  /**
   * @remarks
   * The English name.
   * 
   * @example
   * Aliyun
   */
  code?: string;
  /**
   * @remarks
   * The Chinese name.
   * 
   * @example
   * 阿里云
   */
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagInfoBySelectionResponseBodyDataParamList extends $dara.Model {
  /**
   * @remarks
   * The English name of the parameter.
   * 
   * @example
   * preame
   */
  code?: string;
  /**
   * @remarks
   * The input hint.
   * 
   * @example
   * 无
   */
  hint?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * false
   */
  must?: boolean;
  /**
   * @remarks
   * The Chinese name of the parameter.
   * 
   * @example
   * 无
   */
  name?: string;
  /**
   * @remarks
   * The code corresponding to the type EnumUIWidgetTypes.
   * 
   * @example
   * aqzx
   */
  type?: string;
  /**
   * @remarks
   * The definition of an enumerated value, in the format of code:desc.
   */
  valueDict?: QueryTagInfoBySelectionResponseBodyDataParamListValueDict[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hint: 'Hint',
      must: 'Must',
      name: 'Name',
      type: 'Type',
      valueDict: 'ValueDict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hint: 'string',
      must: 'boolean',
      name: 'string',
      type: 'string',
      valueDict: { 'type': 'array', 'itemType': QueryTagInfoBySelectionResponseBodyDataParamListValueDict },
    };
  }

  validate() {
    if(Array.isArray(this.valueDict)) {
      $dara.Model.validateArray(this.valueDict);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagInfoBySelectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of available authorization codes.
   */
  authCodeList?: string[];
  /**
   * @remarks
   * The tag type.
   * 
   * @example
   * SINGLE_STAGE
   */
  complexityType?: string;
  /**
   * @remarks
   * The link to the API demo.
   * 
   * @example
   * https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.2573870.0.0.3aa921cbOrtqJz
   */
  demoAddress?: string;
  /**
   * @remarks
   * The link to the API documentation.
   * 
   * @example
   * https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.2573870.0.0.3aa921cbOrtqJz
   */
  docAddress?: string;
  /**
   * @remarks
   * The link to the enumerated value definition.
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
   * 查询
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
   * 物流
   */
  industryName?: string;
  /**
   * @remarks
   * The list of tag parameters.
   */
  paramList?: QueryTagInfoBySelectionResponseBodyDataParamList[];
  /**
   * @remarks
   * The rich text description. This field is available only for complex tags.
   * 
   * @example
   * 无
   */
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
   * 通用
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
   * 号码归属
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

export class QueryTagInfoBySelectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. The value **OK** indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryTagInfoBySelectionResponseBodyData[];
  /**
   * @remarks
   * The description of the returned status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1C3B8084-3A7D-570B-BC84-BF945A9CF65E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryTagInfoBySelectionResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptTemplateSelectorResponseBodyDataCareer extends $dara.Model {
  /**
   * @remarks
   * The career ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the career is popular.
   * 
   * @example
   * 0
   */
  isHot?: number;
  /**
   * @remarks
   * The career name.
   * 
   * @example
   * 教育培训
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isHot: 'IsHot',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isHot: 'number',
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

export class GetPptTemplateSelectorResponseBodyDataColour extends $dara.Model {
  /**
   * @remarks
   * The color value.
   * 
   * @example
   * #FCC462
   */
  code?: string;
  /**
   * @remarks
   * The color ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The color name.
   * 
   * @example
   * 橙色
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class GetPptTemplateSelectorResponseBodyDataSuitScene extends $dara.Model {
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * 教育培训
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPptTemplateSelectorResponseBodyDataSuitStyle extends $dara.Model {
  /**
   * @remarks
   * The style ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The style name.
   * 
   * @example
   * 扁平简约
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPptTemplateSelectorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The careers.
   */
  career?: GetPptTemplateSelectorResponseBodyDataCareer[];
  /**
   * @remarks
   * The colors.
   */
  colour?: GetPptTemplateSelectorResponseBodyDataColour[];
  /**
   * @remarks
   * The scenarios.
   */
  suitScene?: GetPptTemplateSelectorResponseBodyDataSuitScene[];
  /**
   * @remarks
   * The styles.
   */
  suitStyle?: GetPptTemplateSelectorResponseBodyDataSuitStyle[];
  static names(): { [key: string]: string } {
    return {
      career: 'Career',
      colour: 'Colour',
      suitScene: 'SuitScene',
      suitStyle: 'SuitStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      career: { 'type': 'array', 'itemType': GetPptTemplateSelectorResponseBodyDataCareer },
      colour: { 'type': 'array', 'itemType': GetPptTemplateSelectorResponseBodyDataColour },
      suitScene: { 'type': 'array', 'itemType': GetPptTemplateSelectorResponseBodyDataSuitScene },
      suitStyle: { 'type': 'array', 'itemType': GetPptTemplateSelectorResponseBodyDataSuitStyle },
    };
  }

  validate() {
    if(Array.isArray(this.career)) {
      $dara.Model.validateArray(this.career);
    }
    if(Array.isArray(this.colour)) {
      $dara.Model.validateArray(this.colour);
    }
    if(Array.isArray(this.suitScene)) {
      $dara.Model.validateArray(this.suitScene);
    }
    if(Array.isArray(this.suitStyle)) {
      $dara.Model.validateArray(this.suitStyle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPptTemplateSelectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * The response object.
   */
  data?: GetPptTemplateSelectorResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPptTemplateSelectorResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


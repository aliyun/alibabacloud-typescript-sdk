// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptTemplateSelectorResponseBodyDataCareer extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0
   */
  isHot?: number;
  /**
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
   * @example
   * #FCC462
   */
  code?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
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
   * @example
   * 1
   */
  id?: number;
  /**
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
   * @example
   * 1
   */
  id?: number;
  /**
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
  career?: GetPptTemplateSelectorResponseBodyDataCareer[];
  colour?: GetPptTemplateSelectorResponseBodyDataColour[];
  suitScene?: GetPptTemplateSelectorResponseBodyDataSuitScene[];
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
   * @example
   * DataNotExists
   */
  code?: string;
  data?: GetPptTemplateSelectorResponseBodyData;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
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


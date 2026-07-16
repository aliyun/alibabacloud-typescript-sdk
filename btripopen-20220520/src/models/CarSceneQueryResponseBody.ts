// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarSceneQueryResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The scenario template ID.
   * 
   * @example
   * travel
   */
  scenarioTemplateId?: string;
  /**
   * @remarks
   * The scenario template name.
   * 
   * @example
   * 差标用车
   */
  scenarioTemplateName?: string;
  /**
   * @remarks
   * The scenario status.
   * 
   * @example
   * ACTIVATE
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      scenarioTemplateId: 'scenarioTemplateId',
      scenarioTemplateName: 'scenarioTemplateName',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioTemplateId: 'string',
      scenarioTemplateName: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarSceneQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation status.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * 未开启用车预订服务
   */
  message?: string;
  /**
   * @remarks
   * The list of car service scenario templates. An empty array [] is returned if no data exists.
   */
  module?: CarSceneQueryResponseBodyModule[];
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the query was successful.
   * 
   * - true: Successful.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': CarSceneQueryResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


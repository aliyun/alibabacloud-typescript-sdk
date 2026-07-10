// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarSceneQueryResponseBodyModule extends $dara.Model {
  scenarioTemplateId?: string;
  scenarioTemplateName?: string;
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
  code?: string;
  message?: string;
  module?: CarSceneQueryResponseBodyModule[];
  requestId?: string;
  success?: boolean;
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BaseCityInfoSearchResponseBodyModule extends $dara.Model {
  code?: string;
  name?: string;
  nameTree?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      nameTree: 'nameTree',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      nameTree: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseCityInfoSearchResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: BaseCityInfoSearchResponseBodyModule[];
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
      module: { 'type': 'array', 'itemType': BaseCityInfoSearchResponseBodyModule },
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


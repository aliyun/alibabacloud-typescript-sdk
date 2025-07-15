// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveVpcAccessResponseBodyApisApi extends $dara.Model {
  /**
   * @remarks
   * API Id
   * 
   * @example
   * 551877242a4b4f3a84a56b7c3570e4a7
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 78d54ac4424d4b1792e33ca35637e8e4
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the runtime environment.
   * 
   * @example
   * d1e1ee28f9fb4b729db0ee8ca76ff0a5
   */
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      stageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessResponseBodyApis extends $dara.Model {
  api?: RemoveVpcAccessResponseBodyApisApi[];
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: { 'type': 'array', 'itemType': RemoveVpcAccessResponseBodyApisApi },
    };
  }

  validate() {
    if(Array.isArray(this.api)) {
      $dara.Model.validateArray(this.api);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVpcAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * API operations
   */
  apis?: RemoveVpcAccessResponseBodyApis;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apis: 'Apis',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: RemoveVpcAccessResponseBodyApis,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apis && typeof (this.apis as any).validate === 'function') {
      (this.apis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


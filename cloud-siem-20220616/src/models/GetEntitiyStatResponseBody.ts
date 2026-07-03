// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEntitiyStatResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of entities.
   * 
   * @example
   * 3
   */
  entityNum?: number;
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The entity UUID.
   * 
   * @example
   * 5cde2118666ffda40783ebd7cec9a60a
   */
  entityUuid?: string;
  static names(): { [key: string]: string } {
    return {
      entityNum: 'EntityNum',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityNum: 'number',
      entityType: 'string',
      entityUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntitiyStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * 123456
   */
  data?: GetEntitiyStatResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: successful.
   * - false: failed.
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
      code: 'number',
      data: { 'type': 'array', 'itemType': GetEntitiyStatResponseBodyData },
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


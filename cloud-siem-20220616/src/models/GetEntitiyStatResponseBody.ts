// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEntitiyStatResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of alerts associated with the entity.
   * 
   * @example
   * 1
   */
  alertNum?: number;
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
   * The type of the entity.
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The UUID of the entity.
   * 
   * @example
   * 5cde2118666ffda40783ebd7cec9a60a
   */
  entityUuid?: string;
  /**
   * @remarks
   * The number of incidents associated with the entity.
   * 
   * @example
   * 1
   */
  incidentNum?: number;
  static names(): { [key: string]: string } {
    return {
      alertNum: 'AlertNum',
      entityNum: 'EntityNum',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      incidentNum: 'IncidentNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNum: 'number',
      entityNum: 'number',
      entityType: 'string',
      entityUuid: 'string',
      incidentNum: 'number',
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
   * The message returned in the response.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
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


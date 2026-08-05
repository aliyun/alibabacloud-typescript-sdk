// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperienceDataResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * **The content type.**.
   * 
   * @example
   * pdf
   */
  contentType?: string;
  /**
   * @remarks
   * **The creation time.**.
   * 
   * @example
   * 12313123123
   */
  created?: number;
  /**
   * @remarks
   * **The data size.**.
   * 
   * @example
   * 100
   */
  dataSize?: number;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * - file
   * - url.
   * 
   * @example
   * file
   */
  dataType?: string;
  /**
   * @remarks
   * The data value.
   * 
   * @example
   * oss://bucket/xxx.pdf
   */
  dataValue?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 9bd21be8
   */
  id?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * xxx.pdf
   */
  name?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * document-analyze
   */
  serviceType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1232131231
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      created: 'created',
      dataSize: 'dataSize',
      dataType: 'dataType',
      dataValue: 'dataValue',
      id: 'id',
      name: 'name',
      serviceType: 'serviceType',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      created: 'number',
      dataSize: 'number',
      dataType: 'string',
      dataValue: 'string',
      id: 'number',
      name: 'string',
      serviceType: 'string',
      updated: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperienceDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FDSS_1232
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListExperienceDataResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListExperienceDataResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


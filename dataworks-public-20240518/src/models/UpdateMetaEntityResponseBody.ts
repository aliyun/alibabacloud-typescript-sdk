// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaEntityResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * custom_entity-customer_api:api_001
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the update was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AASFDFSDFG-DFSDF-DFSDFD-SDFSDF
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the update operation.
   */
  result?: UpdateMetaEntityResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateMetaEntityResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


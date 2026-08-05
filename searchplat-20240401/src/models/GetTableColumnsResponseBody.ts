// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * 主键字段
   */
  comment?: string;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * id
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the field is a primary key.
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      name: 'name',
      primary: 'primary',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      primary: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableColumnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CC93E65-6734-5060-BEF7-0EB0A4862BCF
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetTableColumnsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetTableColumnsResponseBodyResult },
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


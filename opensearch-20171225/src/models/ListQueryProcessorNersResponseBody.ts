// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueryProcessorNersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The name of the entity type.
   * 
   * @example
   * brand
   */
  label?: string;
  /**
   * @remarks
   * The priority of an entity type among entity types that have the same priority level. A smaller value indicates a higher priority. Default value: 0.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The priority level of the entity type. Valid values:
   * 
   * *   HIGH
   * *   MIDDLE
   * *   LOW
   * 
   * @example
   * HIGH
   */
  priority?: string;
  /**
   * @remarks
   * The internal name of the entity type.
   * 
   * @example
   * brand
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      order: 'order',
      priority: 'priority',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      order: 'number',
      priority: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorNersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The priority settings of entity types.
   * 
   * For more information, see [Priority settings of entity types](https://help.aliyun.com/document_detail/173616.html).
   */
  result?: ListQueryProcessorNersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListQueryProcessorNersResponseBodyResult },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationsResponseBodyData extends $dara.Model {
  /**
   * @example
   * Add Tag
   */
  displayName?: string;
  /**
   * @example
   * addTags
   */
  operation?: string;
  /**
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      operation: 'Operation',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      operation: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListOperationsResponseBodyData[];
  /**
   * @example
   * NotFound
   */
  message?: string;
  /**
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListOperationsResponseBodyData },
      message: 'string',
      requestId: 'string',
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


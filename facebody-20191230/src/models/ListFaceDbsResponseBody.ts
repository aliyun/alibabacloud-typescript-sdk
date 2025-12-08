// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFaceDbsResponseBodyDataDbList extends $dara.Model {
  /**
   * @example
   * default
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceDbsResponseBodyData extends $dara.Model {
  dbList?: ListFaceDbsResponseBodyDataDbList[];
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: { 'type': 'array', 'itemType': ListFaceDbsResponseBodyDataDbList },
    };
  }

  validate() {
    if(Array.isArray(this.dbList)) {
      $dara.Model.validateArray(this.dbList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceDbsResponseBody extends $dara.Model {
  data?: ListFaceDbsResponseBodyData;
  /**
   * @example
   * 2B93C43A-F824-40C8-AF79-844342B0F43A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFaceDbsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetActiveIdpConfigResponseBodyData extends $dara.Model {
  description?: string;
  /**
   * @example
   * idp-cfg001
   */
  id?: string;
  name?: string;
  /**
   * @example
   * DingTalk
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
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

export class GetActiveIdpConfigResponseBody extends $dara.Model {
  data?: GetActiveIdpConfigResponseBodyData;
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
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
      data: GetActiveIdpConfigResponseBodyData,
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


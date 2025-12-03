// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1332695887xxxxxx
   */
  creatorAccountId?: string;
  /**
   * @example
   * 应用描述
   */
  description?: string;
  /**
   * @example
   * 2024-01-01T00:00:00.000+00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * testApp
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      creatorAccountId: 'creatorAccountId',
      description: 'description',
      gmtCreate: 'gmtCreate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAccountId: 'string',
      description: 'string',
      gmtCreate: 'string',
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

export class ListApplicationsResponseBody extends $dara.Model {
  data?: ListApplicationsResponseBodyData[];
  /**
   * @example
   * vxc2341gfssad12
   */
  nextToken?: string;
  /**
   * @example
   * FC93CE1A-8D7A-13A9-8306-7465DE2E5C0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListApplicationsResponseBodyData },
      nextToken: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZooKeeperSaslUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1631001140913
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the SASL user.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The current status of the SASL user.
   * 
   * @example
   * UserAddNeedReload
   */
  status?: string;
  /**
   * @remarks
   * The SASL username.
   * 
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      status: 'Status',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      status: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZooKeeperSaslUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListZooKeeperSaslUserResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6C075654-E42F-5F58-914F-E11DA70881B7
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
      data: { 'type': 'array', 'itemType': ListZooKeeperSaslUserResponseBodyData },
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


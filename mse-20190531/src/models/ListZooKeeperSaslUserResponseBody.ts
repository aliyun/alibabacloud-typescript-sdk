// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZooKeeperSaslUserResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1631001140913
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * UserAddNeedReload
   */
  status?: string;
  /**
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
  data?: ListZooKeeperSaslUserResponseBodyData[];
  /**
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


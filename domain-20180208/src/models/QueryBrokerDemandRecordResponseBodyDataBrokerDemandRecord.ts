// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBrokerDemandRecordResponseBodyDataBrokerDemandRecord extends $dara.Model {
  /**
   * @example
   * SE20183A0Q7C5556
   */
  bizId?: string;
  /**
   * @example
   * 1525249317000
   */
  createTime?: number;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      createTime: 'CreateTime',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      createTime: 'number',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


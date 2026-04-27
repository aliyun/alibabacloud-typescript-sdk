// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryAgentCnoAndNameResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 坐席工号
   * 
   * @example
   * 2000
   */
  cno?: string;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * 示例值示例值
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cno: 'Cno',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cno: 'string',
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

export class CloudQueryAgentCnoAndNameResponseBodyData extends $dara.Model {
  list?: CloudQueryAgentCnoAndNameResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudQueryAgentCnoAndNameResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryAgentCnoAndNameResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudQueryAgentCnoAndNameResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudQueryAgentCnoAndNameResponseBodyData,
      message: 'string',
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


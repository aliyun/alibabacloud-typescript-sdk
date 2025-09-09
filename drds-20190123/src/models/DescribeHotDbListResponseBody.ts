// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHotDbListResponseBodyDataListInstanceDbHotDbList extends $dara.Model {
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeHotDbListResponseBodyDataListInstanceDb extends $dara.Model {
  hotDbList?: DescribeHotDbListResponseBodyDataListInstanceDbHotDbList;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * instanceName
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      hotDbList: 'HotDbList',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotDbList: DescribeHotDbListResponseBodyDataListInstanceDbHotDbList,
      instanceName: 'string',
    };
  }

  validate() {
    if(this.hotDbList && typeof (this.hotDbList as any).validate === 'function') {
      (this.hotDbList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBodyDataList extends $dara.Model {
  instanceDb?: DescribeHotDbListResponseBodyDataListInstanceDb[];
  static names(): { [key: string]: string } {
    return {
      instanceDb: 'InstanceDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDb: { 'type': 'array', 'itemType': DescribeHotDbListResponseBodyDataListInstanceDb },
    };
  }

  validate() {
    if(Array.isArray(this.instanceDb)) {
      $dara.Model.validateArray(this.instanceDb);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the databases on which hot-spot scale-out is performed.
   */
  list?: DescribeHotDbListResponseBodyDataList;
  /**
   * @remarks
   * The random number.
   * 
   * @example
   * jzhz
   */
  randomCode?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      randomCode: 'RandomCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: DescribeHotDbListResponseBodyDataList,
      randomCode: 'string',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result that is returned.
   */
  data?: DescribeHotDbListResponseBodyData;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * msg
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B6B7BDC-575D-4A77-A4F8-24B7EF******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeHotDbListResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
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


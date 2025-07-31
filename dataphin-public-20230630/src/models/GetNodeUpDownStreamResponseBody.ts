// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeUpDownStreamResponseBodyNodeDagInfoDownStreamNodeList extends $dara.Model {
  fieldIdList?: string[];
  /**
   * @example
   * n_123456
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldIdList)) {
      $dara.Model.validateArray(this.fieldIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamResponseBodyNodeDagInfoStartNodeList extends $dara.Model {
  fieldIdList?: string[];
  /**
   * @example
   * n_123456
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldIdList)) {
      $dara.Model.validateArray(this.fieldIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamResponseBodyNodeDagInfoUpStreamNodeList extends $dara.Model {
  fieldIdList?: string[];
  /**
   * @example
   * n_123456
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldIdList)) {
      $dara.Model.validateArray(this.fieldIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamResponseBodyNodeDagInfo extends $dara.Model {
  downStreamNodeList?: GetNodeUpDownStreamResponseBodyNodeDagInfoDownStreamNodeList[];
  startNodeList?: GetNodeUpDownStreamResponseBodyNodeDagInfoStartNodeList[];
  upStreamNodeList?: GetNodeUpDownStreamResponseBodyNodeDagInfoUpStreamNodeList[];
  static names(): { [key: string]: string } {
    return {
      downStreamNodeList: 'DownStreamNodeList',
      startNodeList: 'StartNodeList',
      upStreamNodeList: 'UpStreamNodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamNodeList: { 'type': 'array', 'itemType': GetNodeUpDownStreamResponseBodyNodeDagInfoDownStreamNodeList },
      startNodeList: { 'type': 'array', 'itemType': GetNodeUpDownStreamResponseBodyNodeDagInfoStartNodeList },
      upStreamNodeList: { 'type': 'array', 'itemType': GetNodeUpDownStreamResponseBodyNodeDagInfoUpStreamNodeList },
    };
  }

  validate() {
    if(Array.isArray(this.downStreamNodeList)) {
      $dara.Model.validateArray(this.downStreamNodeList);
    }
    if(Array.isArray(this.startNodeList)) {
      $dara.Model.validateArray(this.startNodeList);
    }
    if(Array.isArray(this.upStreamNodeList)) {
      $dara.Model.validateArray(this.upStreamNodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  nodeDagInfo?: GetNodeUpDownStreamResponseBodyNodeDagInfo;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nodeDagInfo: 'NodeDagInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nodeDagInfo: GetNodeUpDownStreamResponseBodyNodeDagInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.nodeDagInfo && typeof (this.nodeDagInfo as any).validate === 'function') {
      (this.nodeDagInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


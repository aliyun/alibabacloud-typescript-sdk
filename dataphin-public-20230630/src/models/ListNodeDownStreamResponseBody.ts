// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeDownStreamResponseBodyNodeInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  depth?: number;
  fieldIdList?: string[];
  /**
   * @example
   * n_2423351
   */
  id?: string;
  name?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      fieldIdList: 'FieldIdList',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
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

export class ListNodeDownStreamResponseBody extends $dara.Model {
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
  nodeInfoList?: ListNodeDownStreamResponseBodyNodeInfoList[];
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
      nodeInfoList: 'NodeInfoList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nodeInfoList: { 'type': 'array', 'itemType': ListNodeDownStreamResponseBodyNodeInfoList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfoList)) {
      $dara.Model.validateArray(this.nodeInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


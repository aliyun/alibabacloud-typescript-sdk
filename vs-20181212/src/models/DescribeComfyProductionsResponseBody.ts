// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyProductionsResponseBodyProductions extends $dara.Model {
  /**
   * @example
   * 6c8234f4-d1e1-4cea-b08b-7926fbdea144
   */
  comfyTaskId?: string;
  /**
   * @example
   * 2026-02-06T20:20:26+08:00
   */
  creationTime?: string;
  /**
   * @example
   * 1755051607877.mp4
   */
  fileName?: string;
  /**
   * @example
   * 3e5bda20-5cd4-4d55-8d23-88d624a18caa
   */
  productionId?: string;
  /**
   * @example
   * NORMAL
   */
  state?: string;
  /**
   * @example
   * 1773707865
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      comfyTaskId: 'ComfyTaskId',
      creationTime: 'CreationTime',
      fileName: 'FileName',
      productionId: 'ProductionId',
      state: 'State',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comfyTaskId: 'string',
      creationTime: 'string',
      fileName: 'string',
      productionId: 'string',
      state: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComfyProductionsResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  productions?: DescribeComfyProductionsResponseBodyProductions[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productions: 'Productions',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productions: { 'type': 'array', 'itemType': DescribeComfyProductionsResponseBodyProductions },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.productions)) {
      $dara.Model.validateArray(this.productions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


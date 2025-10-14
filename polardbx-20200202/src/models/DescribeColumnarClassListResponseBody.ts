// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnarClassListResponseBodyDataClassCodeList extends $dara.Model {
  /**
   * @example
   * polarx.n8.large.col
   */
  classCode?: string;
  /**
   * @example
   * 2
   */
  cpuCore?: string;
  /**
   * @example
   * 2048
   */
  mem?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      cpuCore: 'CpuCore',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      cpuCore: 'string',
      mem: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnarClassListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * object
   */
  classCodeList?: DescribeColumnarClassListResponseBodyDataClassCodeList[];
  static names(): { [key: string]: string } {
    return {
      classCodeList: 'ClassCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCodeList: { 'type': 'array', 'itemType': DescribeColumnarClassListResponseBodyDataClassCodeList },
    };
  }

  validate() {
    if(Array.isArray(this.classCodeList)) {
      $dara.Model.validateArray(this.classCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnarClassListResponseBody extends $dara.Model {
  data?: DescribeColumnarClassListResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 173CA69A-3513-591D-8A09-C1EA37CBE2D9
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
      data: DescribeColumnarClassListResponseBodyData,
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


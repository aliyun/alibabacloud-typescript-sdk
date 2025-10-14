// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdcClassListResponseBodyDataClassCodeList extends $dara.Model {
  /**
   * @example
   * polarx.n2.small.2e.cdc
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

export class DescribeCdcClassListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * array
   */
  classCodeList?: DescribeCdcClassListResponseBodyDataClassCodeList[];
  static names(): { [key: string]: string } {
    return {
      classCodeList: 'ClassCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCodeList: { 'type': 'array', 'itemType': DescribeCdcClassListResponseBodyDataClassCodeList },
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

export class DescribeCdcClassListResponseBody extends $dara.Model {
  data?: DescribeCdcClassListResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6BA32080EEA
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
      data: DescribeCdcClassListResponseBodyData,
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


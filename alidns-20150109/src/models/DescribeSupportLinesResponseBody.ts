// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupportLinesResponseBodyRecordLinesRecordLine extends $dara.Model {
  /**
   * @remarks
   * The code of the parent line. Currently, no data is returned.
   * 
   * @example
   * unicom
   */
  fatherCode?: string;
  /**
   * @remarks
   * The code of the child line.
   * 
   * @example
   * cn_unicom_shanxi
   */
  lineCode?: string;
  /**
   * @remarks
   * The display name of the line.
   * 
   * @example
   * China Unicom
   */
  lineDisplayName?: string;
  /**
   * @remarks
   * The name of the child line.
   * 
   * @example
   * China Unicom_Shanxi
   */
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      lineCode: 'LineCode',
      lineDisplayName: 'LineDisplayName',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      lineCode: 'string',
      lineDisplayName: 'string',
      lineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportLinesResponseBodyRecordLines extends $dara.Model {
  recordLine?: DescribeSupportLinesResponseBodyRecordLinesRecordLine[];
  static names(): { [key: string]: string } {
    return {
      recordLine: 'RecordLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLine: { 'type': 'array', 'itemType': DescribeSupportLinesResponseBodyRecordLinesRecordLine },
    };
  }

  validate() {
    if(Array.isArray(this.recordLine)) {
      $dara.Model.validateArray(this.recordLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportLinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud DNS lines.
   */
  recordLines?: DescribeSupportLinesResponseBodyRecordLines;
  /**
   * @example
   * CFDA0830-7D6E-4C13-8632-B57C7EDCF079
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordLines: 'RecordLines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLines: DescribeSupportLinesResponseBodyRecordLines,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordLines && typeof (this.recordLines as any).validate === 'function') {
      (this.recordLines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


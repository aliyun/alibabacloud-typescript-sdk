// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportedLogCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of logs that are added.
   * 
   * @example
   * 10
   */
  importedLogCount?: number;
  /**
   * @remarks
   * The total number of logs.
   * 
   * @example
   * 59
   */
  totalLogCount?: number;
  /**
   * @remarks
   * The number of logs that are not added.
   * 
   * @example
   * 49
   */
  unImportedLogCount?: number;
  static names(): { [key: string]: string } {
    return {
      importedLogCount: 'ImportedLogCount',
      totalLogCount: 'TotalLogCount',
      unImportedLogCount: 'UnImportedLogCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importedLogCount: 'number',
      totalLogCount: 'number',
      unImportedLogCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedLogCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeImportedLogCountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: DescribeImportedLogCountResponseBodyData,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetSwitchInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The status of the column-level field permission switch. Valid values:
   * 
   * - 1: Enabled.
   * - 0: Disabled.
   * 
   * @example
   * 1
   */
  isOpenColumnLevelPermission?: number;
  /**
   * @remarks
   * The status of the row-level permission switch. Valid values:
   * 
   * - 1: Enabled.
   * - 0: Disabled.
   * 
   * @example
   * 1
   */
  isOpenRowLevelPermission?: number;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      isOpenColumnLevelPermission: 'IsOpenColumnLevelPermission',
      isOpenRowLevelPermission: 'IsOpenRowLevelPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      isOpenColumnLevelPermission: 'number',
      isOpenRowLevelPermission: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSwitchInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FAECEFA8-09BB-58AB-BC58-C8ACEFE4D232
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the row- and column-level permission switches for the dataset.
   */
  result?: QueryDatasetSwitchInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetSwitchInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


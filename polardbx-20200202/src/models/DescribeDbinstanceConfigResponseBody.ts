// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * htap
   */
  configName?: string;
  configValue?: string;
  dbInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      configValue: 'ConfigValue',
      dbInstanceName: 'DbInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      configValue: 'string',
      dbInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceConfigResponseBody extends $dara.Model {
  data?: DescribeDBInstanceConfigResponseBodyData;
  /**
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
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
      data: DescribeDBInstanceConfigResponseBodyData,
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


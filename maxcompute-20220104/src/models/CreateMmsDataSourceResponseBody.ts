// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsDataSourceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 18
   */
  dataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'dataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsDataSourceResponseBody extends $dara.Model {
  data?: CreateMmsDataSourceResponseBodyData;
  /**
   * @example
   * B42CA730-8187-50F1-9FE0-6733297036DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateMmsDataSourceResponseBodyData,
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


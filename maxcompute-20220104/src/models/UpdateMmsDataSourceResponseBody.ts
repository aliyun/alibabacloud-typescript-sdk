// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsDataSourceResponseBodyData extends $dara.Model {
  asyncTaskId?: number;
  sourceId?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'asyncTaskId',
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'number',
      sourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmsDataSourceResponseBody extends $dara.Model {
  data?: UpdateMmsDataSourceResponseBodyData;
  /**
   * @example
   * 76CE80C8-7392-5591-BCC8-610AFBF78ADF
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
      data: UpdateMmsDataSourceResponseBodyData,
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


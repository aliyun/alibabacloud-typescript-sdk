// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilterConfigsResponseBodyData extends $dara.Model {
  message?: string;
  success?: boolean;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilterConfigsResponseBody extends $dara.Model {
  data?: AddFilterConfigsResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': AddFilterConfigsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


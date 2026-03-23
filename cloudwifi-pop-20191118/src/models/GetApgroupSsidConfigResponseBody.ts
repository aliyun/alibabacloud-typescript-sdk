// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApgroupSsidConfigResponseBody extends $dara.Model {
  data?: { [key: string]: any }[];
  errorCode?: number;
  errorMessage?: string;
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      errorCode: 'number',
      errorMessage: 'string',
      isSuccess: 'boolean',
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


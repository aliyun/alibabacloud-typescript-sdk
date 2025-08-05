// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDedicatedIpWarmUpInfoResponseBodyInfo extends $dara.Model {
  esp?: string;
  finished?: boolean;
  static names(): { [key: string]: string } {
    return {
      esp: 'Esp',
      finished: 'Finished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esp: 'string',
      finished: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDedicatedIpWarmUpInfoResponseBody extends $dara.Model {
  info?: GetDedicatedIpWarmUpInfoResponseBodyInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: { 'type': 'array', 'itemType': GetDedicatedIpWarmUpInfoResponseBodyInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


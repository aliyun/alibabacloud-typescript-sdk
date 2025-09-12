// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYzdInstanceTaskResultRequestBody extends $dara.Model {
  appId?: string;
  rangeTimeEndTime?: string;
  rangeTimeStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      rangeTimeEndTime: 'rangeTimeEndTime',
      rangeTimeStartTime: 'rangeTimeStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rangeTimeEndTime: 'string',
      rangeTimeStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYzdInstanceTaskResultRequest extends $dara.Model {
  body?: GetYzdInstanceTaskResultRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetYzdInstanceTaskResultRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


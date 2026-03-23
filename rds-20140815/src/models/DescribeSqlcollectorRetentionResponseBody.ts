// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLCollectorRetentionResponseBody extends $dara.Model {
  configValue?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinuousStrategy extends $dara.Model {
  dataDelayMinutes?: number;
  enabled?: boolean;
  intervalUnit?: string;
  intervalValue?: number;
  static names(): { [key: string]: string } {
    return {
      dataDelayMinutes: 'dataDelayMinutes',
      enabled: 'enabled',
      intervalUnit: 'intervalUnit',
      intervalValue: 'intervalValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDelayMinutes: 'number',
      enabled: 'boolean',
      intervalUnit: 'string',
      intervalValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

